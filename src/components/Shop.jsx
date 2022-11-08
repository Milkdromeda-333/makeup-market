import { Link } from "react-router-dom";
// import ShopBrands from "./ShopBrands";
// import ShopCategories from "./ShopCategories.jsx";
// import Searchbar from "./Searchbar";

export default function Shop() {

    const shopByTagArr = () => {
        const tags = ["Fair Trade",
            "Hypoallergenic",
            "Organic",
            "Peanut-free",
            "Vegan",
            "Silicone-free",
            "Oil-free",
            "Chemical-free"];

        return tags.map(tag => <Link to={"/shop/tags/" + tag} key={tag} className="sm-product-card-label">{tag}</Link>);
    };

    return (
        <div className="m-4">
            <h2 className="title-style">&gt; &gt; Shop</h2>
            <div className="flex flex-row-reverse justify-center mt-4">
                <img src="https://img.icons8.com/ios/60/FFFFFF/google-web-search.png" alt="search icon" className="cursor-pointer" />
                <input type="search" className="rounded-lg border-b-2 w-3/4 p-2" />
            </div>

            {/* Cards */}
            <section className="flex flex-col justify-center items-center gap-4 text-center md:flex-row">

                {/* BY BRAND */}
                {/* <div className="shop-card mt-4 w-3/4 md:w-1/4">
                    <span>By brand</span>
                </div> */}

                <Link to="/shop/shop-by-brand" className="shop-card mt-4 w-3/4 md:w-1/4">
                    By brand
                </Link>

                {/* BY CATEGORY */}
                {/* <div className="shop-card mt-4 w-3/4 md:w-1/4">
                    <span>By category</span>
                </div>; */}
                <Link to="/shop/shop-by-category" className="shop-card mt-4 w-3/4 md:w-1/4">
                    By catagory
                </Link>

                {/* BY PRICE */}
                <Link to="/shop/shop-by-price" className="shop-card mt-4 w-3/4 md:w-1/4">
                    <span>By price</span>
                </Link>
            </section >

            {/* BY TAG */}
            <div className="flex flex-column justify-center items-center mt-8 border-4 border-black w-3/4 mx-auto rounded p-4" >
                <h3 className="title-style m-4">By Tag:</h3>

                <div className="flex flex-row flex-wrap justify-center text-center">
                    {shopByTagArr()}
                </div>
            </div >
        </div >
    );
};