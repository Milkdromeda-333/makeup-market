import { useEffect } from "react";
import { useContext, useState } from "react";
import { Context } from "../context/UserShoppingContext";

export default function ProductCard(props) {

    const { savedItems, setSavedItems, setCartedItems } = useContext(Context);

    const [isSaved, setIsSaved] = useState(null);

    const [isCarted, setIsCarted] = useState(props.isCarted || false);

    function handleSaveClick() {
        if (!isSaved) {
            setSavedItems(prev => [...prev, props]);
            setIsSaved(true);
        } else if (isSaved) {
            setSavedItems(prev => prev.filter(item => item.id !== props.id));
            setIsSaved(false);
        }
    }

    function handleCartItem() {
        if (!isCarted) {

            setCartedItems(prev => [...prev, props.id]);
            setIsCarted(true);

        } else if (isCarted) {

            setCartedItems(prev => prev.filter(item => item !== props.id));
            setIsCarted(false);
        }
    }

    useEffect(() => {
        setIsSaved(function () {
            for (let i = 0; i < savedItems.length; i++) {
                if (savedItems[i].id === props.id) {
                    return true;
                }
            }
        });
    }, [isSaved]);

    return (
        <div className="outline outline-white bg-black flex flex-col w-[80%] min-[506px]:w-[350px] justify-center text-center text-white relative">

            {/* toggles the appearance of the saved icon */}
            {isSaved ? <span className="bi bi-suit-heart-fill absolute top-0 right-2 text-2xl bg-white px-2  text-red-600 hover:text-red-700" onClick={handleSaveClick} role="button" aria-label="save item"></span> : <span className="bi bi-suit-heart text-slate-900 absolute top-0 right-2 text-2xl bg-white px-2 h-min hover:text-red-400" onClick={handleSaveClick} role="button" aria-label="unsave item"></span>}

            <div className="h-32 md:h-52 bg-white">
                <img src={props.image_link} alt={props.name} className="w-full object-contain h-full text-black" />
            </div>

            <h4 className="text-base md:text-xl uppercase whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-4">{props.name}</h4>

            <span className="text-yellow-400">by {props.brand}</span>

            <p className="my-4">${(+props.price).toFixed(2)}</p>

            {isCarted ? <button className="bg-green-500 py-3 hover:bg-green-600 border-t-2" onClick={handleCartItem}>Added to cart</button> : <button className="py-3 hover:bg-white hover:text-black border-t-2" onClick={handleCartItem}>Add to cart</button>}

        </div>
    );
}