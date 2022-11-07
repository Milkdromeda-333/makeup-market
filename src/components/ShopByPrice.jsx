import { useContext } from "react";
import ProductCard from "./ProductCard";
import { Context } from "./ProductsContext";


export default function ShopByPrice() {

    const [[products,]] = useContext(Context);

    const orderedProductsArr = () => {
        return products.sort((current, prev) => current.price - prev.price).map(product => <ProductCard key={product.key} {...product} />);
    };

    return (
        <>
            <h2 className="title-style m-4">&gt; &gt; Shop by Price</h2>

            <div className="flex flex-row flex-wrap justify-center items-center gap-8 mt-4">
                {products ? orderedProductsArr() : <img src="../../public/Ripple-1s-219px.gif" alt="loader" />}
            </div>

        </>
    );
}