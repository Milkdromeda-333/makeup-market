import { useContext } from "react";
import { Context } from "./UserShoppingContext";

export default function CartedItemCard(props) {

    const { setCartedItems } = useContext(Context);

    const deleteItem = () => {
        setCartedItems(prev => prev.filter(item => item !== props.id));
    };

    return (
        <div className="flex flex-row items-center py-4 pr-4 border-b-2 w-full relative carted-item-checkout-card">

            {props.isBeforePurchase && <p className="bi bi-x-square text-red-600 text-3xl absolute top-0 left-0 hover:text-red-700 md:static mr-6" onClick={deleteItem}></p>}

            <div className="flex flex-col items-center gap-4 w-full md:flex-row ">
                <div className="bg-white">
                    <img src={props.image_link} alt={props.name} className="w-20 h-20 rounded-lg object-cover" />
                </div>
                <span className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[70%]">{props.name}</span>

                <p className="md:ml-auto justify-self-end">${(+props.price).toFixed(2)}</p>
            </div>


        </div>
    );
}