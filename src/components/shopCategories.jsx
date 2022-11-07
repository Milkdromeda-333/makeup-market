import { useContext } from "react";
import { Context } from "./ProductsContext";

export default function ShopCategories() {

    const [, catagoriesArr] = useContext(Context);

    return (
        <>
            <h2 className="title-style ml-4 my-8">&gt; &gt; Shop Catagories</h2>

            <div className="flex flex-row flex-wrap gap-10 justify-center items-center text-center mb-4">
                {catagoriesArr().map(category => <div className="shop-card mt-4 w-3/4 md:w-1/4">{category}</div>)}
            </div>
        </>
    );
}