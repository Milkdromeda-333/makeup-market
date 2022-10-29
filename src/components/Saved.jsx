import { useContext } from "react";
import { Context } from "./UserShoppingContext";
import ProductCard from "./ProductCard";


// TODO: add a wa to delete saved items
//   TO BE CODED: callback func for unsaving an item

export default function Saved() {
    const { savedItems, setSavedItems } = useContext(Context);

    // TO BE CODED: Array. maps ou product cards for 
    const savedItemsCards = savedItems.map(item => <ProductCard key={item.id} {...item} isSaved={true} />);

    // const savedItemCards = savedItems.map(item => <ProductCard key={item.id} {...item} />);
    return (
        <div className="m-4">
            <h2 className="title-style mb-4"> &gt; &gt; Saved Items</h2>
            <section className="flex flex-row flex-wrap justify-evenly items-center gap-8">
                {savedItems.length == 0 ? <h3 className="text-white text-xl">No items saved. Start shopping!</h3> : savedItemsCards}
            </section>
        </div>
    );
}