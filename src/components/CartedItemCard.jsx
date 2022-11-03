import { useContext } from "react";
import { Context } from "./UserShoppingContext";

export default function CartedItemCard(props) {

    const { setCartedItems } = useContext(Context);

    const deleteItem = () => {
        setCartedItems(prev => prev.filter(item => item.id !== props.id));
    };

    return (
        <div className="flex flex-row items-center my-4 py-4 border-b-2 w-full relative">

            {props.isBeforePurchase && <p className="bi bi-x-square text-red-600 text-3xl absolute top-0 left-0 hover:text-red-700 md:static mr-6" onClick={deleteItem}></p>}

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="bg-white">
                    <img src={props.image_link} alt={props.name} className="w-20 h-20 rounded-lg object-cover" />
                </div>
                <span className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[70%]">{props.name}</span>

                <p className="md:ml-auto">{props.price}</p>
            </div>


        </div>
    );
}