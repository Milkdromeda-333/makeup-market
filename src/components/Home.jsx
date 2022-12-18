import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./ProductsContext";
import ProductCard from "./ProductCard";

export default function Home() {

    const [[products], shopByCatagoryArr] = useContext(Context);

    function productSamples() {

        const indices = [];
        for (let i = 0; i < 3; i++) {
            indices.push(Math.floor(Math.random() * products.length));
        }
        return indices.map(index => <ProductCard {...products[index]} key={products[index].id} />);
    };

    return (
        <>
            {/* HERO */}
            <div id="hero" className="w-full h-[50vh] md:h-[90vh] flex flex-col justify-center items-start text-white font-brand space-y-4 pl-8">
                <h2 className="text-3xl md:text-7xl p-2 animate__animated animate__fadeInDown">Shop <br /> Makeup Market</h2>

                <Link to="/shop" className="bg-black border-2 border-hot-pink-50 rounded font-regular transition ease font-bold animate__animated animate__wobble animate__delay-1s hover:border-white hover:text-hot-pink-50 homepage-shop-btn">SHOP</Link>
            </div>

            {/* SECTION ONE: INTRO */}
            <section className="flex flex-col-reverse justify-center w-full md:border-t-2 decoration-black min-[1219px]:flex-row">

                <img src="https://images.unsplash.com/photo-1633329712165-4e578376eb87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="models" className="object-cover mx-auto w-full md:h-[500px]  max-[1219px]:border-t-2 md:border-r-2 decoration-black" />
                <div className="flex flex-col">
                    <h2 className=" bg-black text-white text-center text-2xl py-4 md:py-0 md:text-5xl md:w-full">Express yourself.</h2>
                    <p className="md:text-2xl my-8 mx-4 md:mx-auto md:mt-8 pb-4 md:py-0 text-white md:text-center">Makeup Market is dedicated to your happiness in the way you express yourself. With makeup options that span from crulty-free and vegan to oil free and water free. Don't be afraid to be you with our high quality and affordablly priced products.</p>
                </div>

            </section>

            {/* SECTION TWO: SHOP LISTS */}
            <div className="flex flex-col justify-center items-center text-center border-t-2 decoration-black" id="card-container">
                <h3 className="title-style">Shop product category &gt;&gt; </h3>

                <div className="flex flex-wrap justify-center items-center">
                    {shopByCatagoryArr().map(category => <Link to={"shop/shop-by-category/" + category} className="sm-product-card-label py-4 md:py-0">{category}</Link>)}
                </div>
            </div>

            {/* SECTION THREE: OFFER */}
            <section className="bg-black w-full text-white flex justify-evenly flex-wrap items-center text-center py-4">
                <div>
                    <h3 className="text-lg md:text-2xl mb-2 mx-2 md:mx-0">10% OFF YOUR PURCHASE WHEN YOU USE CODE:</h3>
                    <p className="text-yellow-400 md:text-lg md:text-center">ILOVEMAKEUPMARKET</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1508777231775-4e31de7591ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="model" className="h-[200px] md:h-72 object-cove m-4" />
                </div>
            </section>;

            {/* SECTION FOUR: Product cards */}
            {/* BUG: calls product samples twice, could possibly be fixed by moving the axios get call from context to this coponent*/}
            <div className="flex flex-col justify-center items-center pb-4">
                {products ?
                    <>
                        <h2 className="title-style mb-4" id="samples-title">Sneak Peek &gt;&gt;</h2>
                        <div className="flex flex-row flex-wrap gap-8 justify-center items-center w-full">
                            {productSamples()}

                        </div>
                    </>
                    : <img src="/Ripple-1s-219px.gif" alt="loading" />
                }
            </div>
        </>
    );
}