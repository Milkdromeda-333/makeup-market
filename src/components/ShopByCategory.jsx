import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import CalculateResults from "./CalculateResults";
import { getProductsByCategory } from "../api/Axios";


export default function ShopByCatagory() {

    const { category } = useParams();

    const [products, setProducts] = useState([]);

    const productsArr = products.map(item => <ProductCard key={item.id} {...item} />);

    useEffect(() => {
        getProductsByCategory(category)
            .then(res => setProducts([...res.data].filter(item => item.price > 0)))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <h2 className="title-style">&gt;&gt; Shop {category}</h2>
            <CalculateResults numResults={productsArr.length} />

            <div className="flex flex-row flex-wrap justify-center items-center gap-8 m-8">
                {products.length > 0 ? productsArr : <img src="/Ripple-1s-219px.gif" alt="loader" />}
            </div>
        </>
    );
}