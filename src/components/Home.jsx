export default function Home() {

    return (
        <>
            {/* HERO */}
            <div id="hero" className="w-full h-[90vh] flex flex-col justify-center items-start text-white font-brand space-y-4 pl-8">
                <h2 className="text-3xl md:text-7xl p-2">Shop <br /> Makeup Market</h2>
                <button className="bg-black border-2 border-black text-hot-pink-50 rounded px-8 py-2 md:px-20 md:py-4 hover:border-hot-pink-50 font-regular transition ease">SHOP</button>
            </div>

            {/* SECTION ONE */}
            <section className="flex flex-col-reverse justify-center min-[1371px]:flex-row w-full">

                <img src="https://images.unsplash.com/photo-1633329712165-4e578376eb87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="models" className="object-cover mx-auto w-full h-[500px]" />
                <div className="m-4">
                    <h2 className="bg-black text-white text-7xl text-center">Express yourself.</h2>
                    <p className="text-2xl mx-auto p-5 lg:p-[80px] text-white">Makeup Market is dedicated to your happiness in the way you express yourself. With makeup options that span from crulty-free and vegan to oil free and water free. Don't be affraid to be you with our high quality and affordablly priced products.</p>
                </div>

            </section>
        </>
    );
}