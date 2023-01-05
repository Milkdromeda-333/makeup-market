import { Link } from "react-router-dom";
import ShopSearchbar from "./ShopSearchbar.jsx";

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
        <div className="m-4 relative">

            <h2 className="title-style relative">&gt; &gt; Shop</h2>

            <ShopSearchbar />

            {/* Cards */}
            <div className="relative z[1]">

                <section className="flex flex-col justify-center items-center gap-4 text-center md:flex-row">

                    {/* BY BRAND */}
                    <Link to="/shop/shop-by-brand" className="shop-card mt-4 w-3/4 md:w-1/4">
                        By brand
                    </Link>

                    {/* BY CATEGORY */}
                    <Link to="/shop/shop-by-category" className="shop-card mt-4 w-3/4 md:w-1/4">
                        By catagory
                    </Link>

                    {/* BY PRICE */}
                    <Link to="/shop/shop-by-price" className="shop-card mt-4 w-3/4 md:w-1/4">
                        <span>By price</span>
                    </Link>

                </section >

                {/* BY TAG */}
                <div className="flex flex-column justify-center items-center mt-8 border-4 border-black w-3/4 mx-auto rounded min-w-min" >
                    <h3 className="title-style m-4">By Tag:</h3>
                    <div className="flex flex-row flex-wrap justify-center text-center">
                        {shopByTagArr()}
                    </div>

                </div >
            </div>
        </div >
    );
};