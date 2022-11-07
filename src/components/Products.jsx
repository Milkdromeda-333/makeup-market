import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function Products() {

    const [products, setProducts] = useState([]);

    const { category } = useParams();


    {/* ERR:  this arr is not rendering correctly*/ }
    const productsArr = products.map(item => <ProductCard key={item.id} {...item} />);

    useEffect(() => {
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`)
            .then(res => setProducts([...res.data.filter(item => item.price > 0)]))
            .catch(err => console.log(err));
    }, []);

    // useEffect(() => {
    //     console.log(category);
    // }, []);

    return (
        <>
            <h2 className="title-style m-4"> &gt; &gt; Shop {category}</h2>

            <div className="flex flex-row flex-wrap justify-center items-center gap-10">

                {/* this is where the arr is rendering */}
                {products.length > 0 ? productsArr : <img src="../../public/Ripple-1s-219px.gif" alt="loading" />}
            </div>

        </>
    );
}