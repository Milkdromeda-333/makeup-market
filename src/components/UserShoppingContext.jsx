import { createContext, useState } from "react";

const Context = createContext();

function UserShoppingContext({ children }) {
    const [savedItems, setSavedItems] = useState([]);
    const [cartedItems, setCartedItems] = useState([]);
    const [appliedDiscounts, setAppliedDiscounts] = useState([]);

    return (
        <Context.Provider value={{ savedItems, setSavedItems, cartedItems, setCartedItems, appliedDiscounts, setAppliedDiscounts }}>
            {children}
        </Context.Provider>
    );
}

export { Context, UserShoppingContext };