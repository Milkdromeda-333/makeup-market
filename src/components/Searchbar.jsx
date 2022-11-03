export default function Searchbar() {

    return (
        <div className="flex flex-row w-full">
            <img src="https://img.icons8.com/ios/50/FFFFFF/google-web-search.png" alt="search icon" className="pl-4 cursor-pointer" />
            <input type="search" className="round-lg bg-transparent border-b-2 w-full" />
        </div>
    );
}