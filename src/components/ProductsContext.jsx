import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Context = createContext(null);

function ProductsContext({ children }) {
    const [products, setProducts] = useState();

    const shopByCatagoryArr = () => {
        const categories = ["Blush",
            "Mascara",
            "Lipstick",
            "Foundation",
            "Nail Polish",
            "Lip Liner",
            "Eyeshadow",
            "Eyeliner",
            "Eyebrow",
            "Bronzer"];

        return categories;
    };

    useEffect(() => {
        axios.get("https://makeup-api.herokuapp.com/api/v1/products.json")
            .then(res => setProducts(res.data.filter(item => item.price > 0)))
            .catch(err => console.log(err));

    }, []);

    return (
        <Context.Provider value={[[products, setProducts], shopByCatagoryArr]}>
            {children}
        </Context.Provider>
    );
}

export { Context, ProductsContext };