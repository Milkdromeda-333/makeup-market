export default function Logo(props) {

    const fontSize = props.fs;

    return (
        <div className="font-brand flex justify-center items-center space-x-1 px-10 py-5" style={{ fontSize: fontSize }}>
            <span className=""> MAKEUP</span>
            <div className="border-2 rounded-full border-yellow-400 bg-transparent grid place-items-center p-2 text-hot-pink-50">MM</div>
            <span> MARKET</span>
        </div>
    );
}