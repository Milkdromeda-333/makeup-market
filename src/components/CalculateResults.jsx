
export default function CalculateResults(props) {

    const { data } = props;
    return (
        <>
            {data === "0" || data > 0 ? <span className="mx-5 mb-2 underline text-white text-xl relative bottom-[25px]">{data} results</span>
                : <span className="mx-5 mb-2 underline text-white text-xl relative bottom-[25px]">loading results...</span>}
        </>
    );
}