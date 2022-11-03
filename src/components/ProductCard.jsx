import { useContext, useState } from "react";
import { Context } from "./UserShoppingContext";

//  TO-DO: needs to check if its carted and keep the styling of cartedItems

export default function ProductCard(props) {

    const { setSavedItems, setCartedItems } = useContext(Context);

    const [isSaved, setIsSaved] = useState(props.isSaved || false);
    const [isCarted, setIsCarted] = useState(props.isCarted || false);

    // allows this item to be saved and unsaved
    function handleSaveClick() {
        if (!isSaved) {
            setSavedItems(prev => [...prev, props]);
            setIsSaved(true);
        } else if (isSaved) {
            setSavedItems(prev => prev.filter(item => item.id !== props.id));
            setIsSaved(false);
        }
    }

    // handles cart functionlity. adds and deletes form cart.
    function handleCartItem() {
        if (!isCarted) {
            setCartedItems(prev => [...prev, { ...props }]);
            setIsCarted(true);
        } else if (isCarted) {
            setCartedItems(prev => prev.filter(item => item.id !== props.id));
            setIsCarted(false);
        }
    }



    return (
        <div className="outline outline-white bg-black flex flex-col justify-center text-center text-white w-1/2 md:w-[400px] relative">

            {/* toggles the appearance of the saved icon */}
            {isSaved ? <span class="bi bi-suit-heart-fill absolute top-0 right-2 text-2xl bg-white px-2  text-red-600 hover:text-red-700" onClick={handleSaveClick}></span> : <span className="bi bi-suit-heart text-slate-900 absolute top-0 right-2 text-2xl bg-white px-2 h-min hover:text-red-400" onClick={handleSaveClick}></span>}

            <div className="h-52 bg-white">
                <img src={props.image_link} alt={props.name} className="w-full object-contain h-52 text-black" />
            </div>

            <h4 className="text-xl uppercase whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-4">{props.name}</h4>

            <span className="text-yellow-400">by {props.brand.toUpperCase()}</span>

            <p className="my-4">{props.price || "5.0"} {props.currency || "USD"}</p>

            {/* <button className="py-3 hover:bg-white hover:text-black border-t-2" onClick={handleCartItem}>Add to cart</button> */}

            {isCarted ? <button className="bg-green-500 py-3 hover:bg-green-600 border-t-2" onClick={handleCartItem}>Added to cart</button> : <button className="py-3 hover:bg-white hover:text-black border-t-2" onClick={handleCartItem}>Add to cart</button>}

        </div>
    );
}