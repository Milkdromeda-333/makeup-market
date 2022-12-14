import { useContext, useState, useEffect } from "react";
import { Context as USContext } from "../context/UserShoppingContext.jsx";
import CartedItemCard from "./CartedItemCard.jsx";
import CartModalCheckout from "./CartModalCheckout.jsx";
import { Context } from "../context/ProductsContext.jsx";

export default function Cart() {

    const { products } = useContext(Context);
    const { cartedItems, setCartedItems, appliedDiscounts, setAppliedDiscounts } = useContext(USContext);

    const [discountCodeInput, setDiscountCodeInput] = useState("");
    const [total, setTotal] = useState(0);
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);

    const cartedItemsArr = cartedItems.map(item => products.find(el => el.id === item));

    const getCartedObj = (id) => cartedItemsArr.find(item => id === item.id);

    const cartedItemsCards = cartedItems.map(itemId => <CartedItemCard key={itemId} isBeforePurchase={true} {...getCartedObj(itemId)} />);

    const totalArr = cartedItemsArr.map(item => +(+item.price).toFixed(2)).sort((a, b) => a - b);

    //  FUNCTIONS

    const handleChangeDiscountInput = (e) => {
        setDiscountCodeInput(e.target.value);
    };

    const handleSubmitDiscountCode = (e) => {

        e.preventDefault();

        if (discountCodeInput === "ILOVEMAKEUPMARKET") {
            if (isDiscountApplied === true) {
                window.alert("This discount has already been applied!");
            } else {
                setTotal(prev => +(prev - (prev / 10)).toFixed(2));
                setIsDiscountApplied(true);
            }
        } else if (isDiscountApplied && isDiscountApplied) {
            window.alert("You have already used a code!");
        }
        else {
            window.alert("Sorry, there's no such code.\n **Hint: Home pages always have goodies!** 😉");
        }
        setDiscountCodeInput("");
    };

    const handlePay = () => {

        if (cartedItemsArr.length > 0) {

            window.modal.className = "block";

            document.querySelector("body").style.overflow = "hidden";

            setIsDiscountApplied(false);
        } else {
            return;
        }
    };

    const closeModal = () => {
        setCartedItems([]);
        document.querySelector("#modal").classList = "hidden";
        document.querySelector("body").style.overflow = "visible";
    };

    useEffect(() => {

        if (totalArr.length) {
            setTotal(totalArr.reduce((a, b) => a + b));
        } else {
            setTotal(0.00);
        }
    }, [cartedItems, appliedDiscounts]);

    return (
        <>
            {/* MODAL */}
            <div className="hidden" id="modal">
                <CartModalCheckout total={total} closeModal={closeModal} cartedItemsArr={cartedItemsArr} onClick={closeModal} />
            </div>

            <h2 className="title-style m-4">&gt; &gt; Cart</h2>

            <div className="grid grid-cols-1 min-[1065px]:grid-cols-3 m-8 gap-4 text-white justify-center justify-items-center md:justify-items-stretch">

                {/* SECTION 1 */}

                <section className="flex flex-col flex-wrap p-8 bg-black/90 rounded text-white md:col-span-2 w-full">

                    {cartedItems.length ? cartedItemsCards : <span className="text-xl text-center p-8">Nothing here. Start shopping!</span>}

                    {cartedItems.length > 0 && (
                        <div className="text-xl mt-4 md:ml-auto">
                            <p className="md:ml-auto underline">Total: </p>
                            <span className="text-green-500">${(totalArr.reduce((a, b) => a + b)).toFixed(2)}</span>
                        </div>
                    )}
                </section>

                {/* SECTION 2 */}

                <section className="flex flex-col justify-center bg-black/90 rounded h-min mx-auto pb-20 pt-8 px-8 gap-4 relative w-full min-[1065px]:w-full">

                    <span>Grand Total: ${total > 0 ? (+total + 5.00).toFixed(2) : 0.00}</span>

                    <span>Shipping: $5.00</span>

                    <div className="flex flex-col flex-wrap">

                        <span>Discounts:</span>
                        {isDiscountApplied && cartedItems.length ? <span className="text-red-400">-${(+(total) / 10).toFixed(2)}</span> : <span>No discounts applied.</span>}
                    </div>

                    {/* DISCOUNT FORM */}
                    <div className="flex flex-col mt-2">

                        <p>Enter discount code:</p>

                        <input type="text" name="code" value={discountCodeInput} className="bg-transparent outline-none border-b-2 mt-2 p-2" onChange={(e) => handleChangeDiscountInput(e)} />

                        <button onClick={handleSubmitDiscountCode} className="border rounded p-2 mt-2 border-white hover:bg-white hover:text-black transition">submit</button>

                    </div>

                    <button className="bg-green-500 text-white absolute bottom-0 left-0 right-0 h-16 font-bold hover:bg-green-600" onClick={handlePay}>Pay Now</button>

                </section>

            </div>


        </>
    );
}