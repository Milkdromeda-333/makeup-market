import { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext(null);

function ProductsContext({ children }) {
    const [products, setProducts] = useState();

    useEffect(() => {
        axios.get("https://makeup-api.herokuapp.com/api/v1/products.json")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));

    }, []);

    return (
        <Context.Provider value={[products, setProducts]}>
            {children}
        </Context.Provider>
    );
}

export { Context, ProductsContext };