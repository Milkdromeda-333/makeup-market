import { useContext } from "react";
import { Context } from "./UserShoppingContext";
import ProductCard from "./ProductCard";


// TODO: add a wa to delete saved items

export default function Saved() {
    const { savedItems, setSavedItems } = useContext(Context);

    const savedItemCards = savedItems.map(item => <ProductCard key={item.id} {...item} />);
    return (
        <div className="m-4">
            <h2 className="title-style"> &gt; &gt; Saved Items</h2>
            <section>
                {savedItems.length == 0 ? <h3 className="mt-4 text-white text-xl">No items saved. Start shopping!</h3> : savedItemCards}
            </section>
        </div>
    );
}