export default function Logo(props) {
    const fontSize = props;
    return (
        <div className="font-brand flex justify-center items-center space-x-1 fs-[`${fontSize}`]">
            <span> MAKEUP</span>
            <div className="border-2 rounded-full bg-transparent grid place-items-center p-1">MM</div>
            <span> MARKET</span>
        </div>
    );
}