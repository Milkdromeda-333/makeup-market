import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getProductaByBrand } from "../api/Axios";


export default function ShopByBrand() {
    const { brand } = useParams();
    const [products, setProducts] = useState([]);

    const productsArr = () => products.filter(item => item.price > 0).map(item => <ProductCard key={item.id} {...item} />);

    useEffect(() => {
        getProductaByBrand(brand)
            .then(res => setProducts([...res.data]))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <h2 className="title-style">&gt; &gt; Shop {brand}</h2>

            <div className="flex flex-row flex-wrap justify-center items-center gap-8 m-4 text-white">
                {products?.length > 0 ? productsArr() : <img src="/Ripple-1s-219px.gif" alt="loader" />}
            </div>
        </>
    );
}