import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import CalculateResults from "./CalculateResults";
import { getProductsByTag } from "../api/Axios";

export default function ShopByTag() {

    const { tag } = useParams();

    const [products, setProducts] = useState([]);

    const productsArr = products.map(product => <ProductCard key={product.id} {...product} />);

    // gets products by tags and sets to state
    useEffect(() => {
        getProductsByTag(tag)
            .then(res => setProducts([...res.data].filter(item => item.price > 0)))
            .catch(err => console.log(err));

    }, []);

    return (
        <>
            <h2 className="title-style">&gt; &gt; Shop {tag} Products</h2>
            <CalculateResults numResults={productsArr.length} />

            <div className="flex flex-wrap flex-row justify-center items-center gap-8 m-4">
                {products.length > 0 ? productsArr || "Sorry, no products to show..." : <img src="/Ripple-1s-219px.gif" alt="loader" />}
            </div>
        </>
    );
};