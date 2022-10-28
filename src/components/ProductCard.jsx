
export default function ProductCard(props) {

    return (
        <div className="outline outline-white bg-black flex flex-col justify-center text-center text-white w-1/2 md:w-[400px] relative">

            <span class="bi bi-suit-heart text-black absolute top-0 right-4 text-2xl"></span>

            <div className="h-52 bg-white">
                <img src={props.image_link} alt={props.name} className="w-full object-contain h-52 text-black" />
            </div>

            <h4 className="text-xl uppercase whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-4">{props.name}</h4>

            <span className="text-yellow-400">by {props.brand.toUpperCase()}</span>

            <p className="my-4">{props.price || "5.0"} {props.currency || "USD"}</p>

            <button className="bg-blacktext white py-3 hover:bg-white hover:text-black border-t-2">Add to cart</button>

        </div>
    );
}