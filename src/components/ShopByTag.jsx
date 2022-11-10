import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function ShopByTag() {

    const { tag } = useParams();

    const [products, setProducts] = useState([]);

    const productsArr = products.map(product => <ProductCard key={product.id} {...product} />);

    useEffect(() => {
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=${tag.split("-").join("+")}`)
            .then(res => setProducts([...res.data].filter(item => item.price > 0)))
            .catch(err => console.log(err));

    }, []);

    return (
        <>
            <h2 className="title-style m-4">&gt; &gt; Shop {tag} Products</h2>

            <div className="flex flex-wrap flex-row justify-center items-center gap-8 m-4">
                {products.length > 0 ? productsArr || "Sorry, no products to show..." : <img src="../../public/Ripple-1s-219px.gif" alt="loader" />}
            </div>
        </>
    );
};