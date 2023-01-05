import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../api/Axios";

const Context = createContext();

function ProductsContext({ children }) {
    const [products, setProducts] = useState([]);

    // pass axios inside of a function into provider and call it where needed to keep from loading twice
    useEffect(() => {
        getAllProducts()
            .then(res => setProducts(res.data.filter(item => item.price > 0)))
            .catch(err => console.log(err));

    }, []);

    return (
        <Context.Provider value={{ products }}>
            {children}
        </Context.Provider>
    );
}

export { Context, ProductsContext };