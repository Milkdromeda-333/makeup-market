
export default function CalculateResults(props) {

    return (
        <h2 className="mx-5 mb-2 underline text-white text-xl relative bottom-[25px]">
            {props.numResults > 0 ? props.numResults : "loading"} results
        </h2>
    );
}