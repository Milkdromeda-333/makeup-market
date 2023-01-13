import { useContext } from "react";
import ProductCard from "./ProductCard";
import { Context } from "../context/ProductsContext";


export default function ShopByPrice() {

    const { products } = useContext(Context);

    const orderedProductsArr = () => {
        return products.sort((current, prev) => current.price - prev.price).map(product => <ProductCard key={product.id} {...product} />);
    };

    return (
        <>
            <h2 className="title-style">&gt; &gt; Shop by Price</h2>

            <div className="flex flex-row flex-wrap justify-center items-center gap-8 m-4">
                {products.length > 0 ? orderedProductsArr() : <img src="/Ripple-1s-219px.gif" alt="loader" />}
            </div>

        </>
    );
}