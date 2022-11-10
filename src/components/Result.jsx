
export default function Result(props) {

    return (
        <div className="w-full bg-white text-black flex flex-row items-center border-b-2 border-black hover:bg-slate-800">
            <img src={props.image_link} alt={props.name} className="h-20 object-cover" />
            <h2>{props.name}</h2>
        </div>
    );
}