import { useContext } from "react";
import { Context } from "../context/UserShoppingContext";
import ProductCard from "./ProductCard";

export default function Saved() {
    const { savedItems, cartedItems } = useContext(Context);

    const savedItemsCards = savedItems.map(item => <ProductCard key={item.id} {...item} isSaved={true} isCarted={cartedItems.includes(item.id)} />);

    return (
        <div className="mx-4 mb-4">
            <h2 className="title-style mb-4"> &gt; &gt; Saved Items</h2>
            <section className="flex flex-row flex-wrap justify-evenly items-center gap-8 min-h-[50vh]">
                {savedItems.length == 0 ? <h3 className="text-white text-xl self-start">No items saved. Start shopping!</h3> : savedItemsCards}
            </section>
        </div>
    );
}