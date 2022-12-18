import { useContext } from "react";
import { Context } from "./ProductsContext";
import { Link } from "react-router-dom";

export default function ShopCategories() {

    const { shopByCatagoryArr } = useContext(Context);

    const categoriesCards = shopByCatagoryArr().map(category => <Link to={"/shop/shop-by-category/" + category} className="shop-card mt-4 w-3/4 md:w-1/4" key={category}>{category}</Link>);

    return (
        <>
            <h2 className="title-style ml-4 my-8">&gt; &gt; Shop Categories</h2>

            <div className="flex flex-row flex-wrap gap-10 justify-center items-center text-center mb-4">
                {categoriesCards}
            </div>
        </>
    );
}