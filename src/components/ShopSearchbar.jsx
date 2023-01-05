import { useState } from "react";
import { useContext, useEffect } from "react";
import Result from "./Result.jsx";
import { Context } from "./ProductsContext.jsx";

export default function ShopSearchbar() {

    
    const [userInput, setUserInput] = useState("");
    const [resultsCards, setResultsCards] = useState(null);
    const { products } = useContext(Context);
    
    
    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    // creates an array of product cards for the searchbar to render after filtering.
    useEffect(() => {
        if (products) {
            const matchedProducts = products.filter(item => item.name.toUpperCase().startsWith(userInput.toUpperCase()));
            setResultsCards(matchedProducts.map(item => <Result {...item} />));
        }
    }, [userInput]);
    
    // adds an event listener to the window that will unfocus the
    // searchbar if the window is clicked if its focused.
    useEffect(() => {

        const searchbar = document.querySelector("#search");

        function unfocus() {
            if (searchbar !== document.activeElement) {
                setUserInput("");
            }
        };

        window.addEventListener("click", unfocus);

        return () => window.removeEventListener("click", unfocus);
    }, []);


    return (
        <div className="grid relative z-[10] place-items-center mt-4">
            <input type="search" className="rounded-lg border-b-2 w-3/4 pl-12 pr-4 py-2 searchbar" value={userInput} onChange={handleInputChange} placeholder="Search" id="search" />

            <div className="w-3/4 max-h-[40vh] overflow-y-scroll" id="resultsWrapper">{resultsCards && userInput !== "" ? resultsCards : null}</div>
        </div>
    );
}