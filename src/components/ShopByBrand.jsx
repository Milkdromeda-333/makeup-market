import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CalculateResults from "./CalculateResults";
import ProductCard from "./ProductCard";


export default function ShopByBrand() {
    const { brand } = useParams();
    const [products, setProducts] = useState([]);

    const productsArr = products.filter(item => item.price > 0).map(item => <ProductCard key={item.id} {...item} />);

    useEffect(() => {
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand.trim()}`)
            .then(res => setProducts([...res.data]))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <h2 className="title-style">&gt; &gt; Shop {brand}</h2>
            <CalculateResults numResults={productsArr.length} />

            <div className="flex flex-row flex-wrap justify-center items-center gap-8 m-4 text-white">
                {productsArr.length > 0 ? productsArr : <img src="/Ripple-1s-219px.gif" alt="loader" />}
            </div>
        </>
    );
}