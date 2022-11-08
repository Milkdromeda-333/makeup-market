import { useContext, useState, useEffect } from "react";
import { Context as USContext } from "./UserShoppingContext.jsx";
import CartedItemCard from "./CartedItemCard.jsx";
import CartModalCheckout from "./CartModalCheckout.jsx";
// import ProductCard from "./ProductCard.jsx";
import { Context } from "./ProductsContext.jsx";

// NOTE 2 SELF: NEEDS RESPONSIVENESS

export default function Cart() {

    // STATE, VARIABLES and CONTEXTS

    const [[products]] = useContext(Context);
    const { cartedItems, setCartedItems, appliedDiscounts, setAppliedDiscounts } = useContext(USContext);

    const [discountCodeInput, setDiscountCodeInput] = useState("");
    const [total, setTotal] = useState(0);
    const [availableDiscounts, setAvailableDiscounts] = useState(["ILOVEMAKEUPMARKET", "10OFF"]);

    const cartedItemsArr = cartedItems.map(item => products.find(el => el.id === item));

    const renderCartedItemsArr = cartedItems.map(itemid => <CartedItemCard key={itemid} isBeforePurchase={true} {...cartedItemsArr.find(el => el.id === itemid)} />);

    const totalArr = cartedItemsArr.map(item => +(+item.price).toFixed(2)).sort((a, b) => a - b);
    const showAppliedDiscounts = appliedDiscounts.map((el, index) => <li key={index} className="text-green-500">{el}</li>);

    console.log(totalArr);

    //  FUNCTIONS

    const calculateTotal = () => +totalArr.reduce((current, prev) => current + prev, 0).toFixed(2);

    const handleChangeDiscountInput = (e) => {
        setDiscountCodeInput(e.target.value);
    };

    const handleSubmitDiscountCode = (e) => {

        e.preventDefault();

        switch (discountCodeInput) {
            case "ILOVEMAKEUPMARKET":

                if (availableDiscounts.indexOf("ILOVEMAKEUPMARKET") === -1) {
                    window.alert("This discount has already been applied!");
                    break;
                }

                // gets the lowest priced items index for use in the following functions
                const discountedItemIndex = cartedItems.findIndex(item => parseInt(item.price) === totalArr[0]);

                setTotal(prev => prev - cartedItems[discountedItemIndex].price);
                setAppliedDiscounts(prev => [...prev, -cartedItems[discountedItemIndex].price]);
                setAvailableDiscounts(prev => prev.filter(el => el !== "ILOVEMAKEUPMARKET"));

                break;

            case "10OFF":

                if (availableDiscounts.indexOf("10OFF") === -1) {
                    window.alert("This discocount has already been applied!");
                    break;
                }

                setTotal(prev => prev / (prev / 10));
                setAppliedDiscounts(prev => [...prev, -total / 10]); setAvailableDiscounts(prev => prev.filter(el => el !== "10OFF"));
                setAvailableDiscounts(prev => prev.filter(el => el !== "10OFF"));

                break;
        }
        setDiscountCodeInput("");
    };

    const handlePay = () => {

        window.modal.className = "block";

        document.querySelector("body").style.overflow = "hidden";

        setAppliedDiscounts([]);

    };

    const closeModal = () => {
        setCartedItems([]);
        document.querySelector("#modal").classList = "hidden";
        document.querySelector("body").style.overflow = "visible";
    };

    useEffect(() => {
        setTotal(calculateTotal);
    }, [cartedItems]);

    return (
        <>


            {/* MODAL */}
            <div className="hidden" id="modal">
                <CartModalCheckout total={total} closeModal={closeModal} onClick={closeModal} />
            </div>

            <h2 className="title-style m-4">&gt; &gt; Cart</h2>

            <div className="grid grid-cols-1 min-[1160px]:grid-cols-3 m-8 gap-4 text-white justify-center">

                {/* SECTION 1 */}
                <section className="flex flex-col flex-wrap p-8 bg-black/90 rounded text-white col-span-2">

                    {cartedItems.length > 0 ? renderCartedItemsArr : <span className="text-xl text-center p-8">Nothing here. Start shopping!</span>}

                    {cartedItems.length > 0 && (
                        <div className="text-xl md:ml-auto">
                            <p className="md:ml-auto underline">Total: </p>
                            <span className="text-green-500">{total}$</span>
                        </div>
                    )}

                </section>


                {/* SECTION 2 */}
                <section className="flex flex-col justify-center bg-black/90 rounded h-min mx-auto p-20 gap-2 relative min-[1160px]:w-full">
                    <span>Bag Total: {total}$</span>
                    <span>Shipping: {total >= 20 ? "FREE!" : "5$"}</span>
                    <span>Discounts:</span>

                    {appliedDiscounts.length > 0 ? <ul>{showAppliedDiscounts}</ul> : <span>No discounts applied.</span>}

                    {/* DISCOUNT FORM */}
                    <div className="flex flex-col justify-center items-center mt-2">
                        <p>Enter discount code:</p>
                        <input type="text" name="code" value={discountCodeInput} className="bg-transparent outline-none border-b-2" onChange={(e) => handleChangeDiscountInput(e)} />
                        <button onClick={handleSubmitDiscountCode} className="border rounded p-2 mt-2 border-white hover:bg-white hover:text-black transition">submit</button>
                    </div>

                    <button className="bg-green-500 text-white absolute bottom-0 left-0 right-0 h-16 font-bold hover:bg-green-700" onClick={handlePay}>Pay Now</button>
                </section>

            </div>


        </>
    );
}