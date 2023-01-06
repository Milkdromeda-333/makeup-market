import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import CalculateResults from "./CalculateResults";
import { getProductsByTag } from "../api/Axios";

export default function ShopByTag() {

    const { tag } = useParams();

    // filtered products
    const [products, setProducts] = useState();
    const [results, setResults] = useState(<img src='/Ripple-1s-219px.gif' alt='loader' />);
    const [calculateResultsData, setCalculateResultsData] = useState(null);

    const productsArr = () => products?.map(product => <ProductCard key={product.id} {...product} />);

    // gets products by tags and sets to state
    useEffect(() => {
        getProductsByTag(tag)
            .then(res => setProducts([...res.data].filter(item => item.price > 0)))
            .catch(err => console.log(err));
    }, []);

    // checks if products was set by the other useEffect, if true,
    // it will check if it returned anything and render accordingly.
    useEffect(() => {

        const handleResults = () => {
            if (productsArr().length === 0) {
                setResults(<span className="text-white text-2xl">Sorry, no products are listed!</span>);
                setCalculateResultsData("0");
                return;
            }
            setResults(productsArr);
            setCalculateResultsData(productsArr().length);
        };

        if (products) {
            handleResults();
        }
    }, [products]);

    return (
        <>
            <h2 className="title-style">&gt; &gt; Shop {tag} Products</h2>

            <CalculateResults data={calculateResultsData} />

            <div className="flex flex-wrap flex-row justify-center items-center gap-8 m-4">
                {results}
            </div>
        </>
    );
};