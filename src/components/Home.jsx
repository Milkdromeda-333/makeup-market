export default function Home() {

    return (
        <>
            {/* HERO */}
            <div id="hero" className="w-full h-[50vh] md:h-[90vh] flex flex-col justify-center items-start text-white font-brand space-y-4 pl-8">
                <h2 className="text-3xl md:text-7xl p-2">Shop <br /> Makeup Market</h2>
                <button className="bg-black border-2 border-hot-pink-50 text-white rounded px-8 py-2 font-regular transition ease font-bold md:px-20 md:py-4 hover:border-white hover:text-hot-pink-50">SHOP</button>
            </div>

            {/* SECTION ONE: INTRO */}
            <section className="flex flex-col-reverse justify-center w-full border-t-2 decoration-black min-[1371px]:flex-row">

                <img src="https://images.unsplash.com/photo-1633329712165-4e578376eb87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="models" className="object-cover mx-auto w-full h-[500px] border-r-2 decoration-black" />
                <div className="m-4">
                    <h2 className="bg-black text-white text-7xl text-center">Express yourself.</h2>
                    <p className="text-2xl mx-auto p-5 text-white lg:p-[80px]">Makeup Market is dedicated to your happiness in the way you express yourself. With makeup options that span from crulty-free and vegan to oil free and water free. Don't be afraid to be you with our high quality and affordablly priced products.</p>
                </div>

            </section>

            {/* SECTION TWO: SHOP LISTS */}
            <div className="flex flex-col justify-center items-center text-center border-t-2 decoration-black" id="card-container">
                <h3 className="text-white text-3xl font-bold ">Shop product types &gt;&gt; </h3>

                <div className="flex flex-wrap justify-center items-center">
                    <div className="cards"><span>Lipstick</span></div>
                    <div className="cards"><span>Blush</span></div>
                    <div className="cards"><span>Mascara</span></div>
                    <div className="cards"><span>Foundation</span></div>
                    <div className="cards"><span>Nail Polish</span></div>
                    <div className="cards"><span>Lip Liner</span></div>
                    <div className="cards"><span>Eyeshadow</span></div>
                    <div className="cards"><span>Eyeliner</span></div>
                    <div className="cards"><span>Eyebrow</span></div>
                    <div className="cards"><span>Bronzer</span></div>
                </div>
            </div>

            {/* SECTION THREE: FREE SHIPPING OFFER */}
            <section className="bg-black w-full text-white flex justify-evenly items-center pl-12 py-4">
                <div>
                    <h3 className="text-2xl mb-2">Free shipping on all orders 10$ and up!</h3>
                    <p className="text-yellow-400">Just to say thanks for being a pal :)</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1508777231775-4e31de7591ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="model" className="h-72 object-cover" />
                </div>
            </section>

            {/* SECTION FOUR: Product cards */}

        </>
    );
}