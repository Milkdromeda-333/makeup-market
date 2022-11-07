import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";

// rendered by Shop.jsx
export default function ShopByTag() {

    const { tag } = useParams();

    const [products, setProducts] = useState([]);

    const productsArr = products.map(product => <ProductCard key={product.id} {...product} />);

    useEffect(() => {
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_types=${tag}`)
            .then(res => setProducts([...res.data]))
            .catch(err => console.log(err));

    }, []);

    return (
        <>
            <h2 className="title-style m-4">&gt; &gt; Shop {tag}</h2>

            <div className="flex flex-wrap flex-row justify-center items-center gap-8">
                {products.length > 0 ? productsArr : <img src="../../public/Ripple-1s-219px.gif" alt="loader" />}
            </div>
        </>
    );
}