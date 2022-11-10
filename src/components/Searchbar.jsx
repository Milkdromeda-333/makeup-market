export default function Searchbar() {

    return (
        <div className="flex flex-row">
            <img src="https://img.icons8.com/ios/50/FFFFFF/google-web-search.png" alt="search icon" className="cursor-pointer" />
            <input type="search" className="round-lg bg-transparent border-b-2 px-2 focus:outline-none focus:border-b-2" />
        </div>
    );
}