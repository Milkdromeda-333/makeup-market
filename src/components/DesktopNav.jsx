import { Link } from 'react-router-dom';
import Logo from './Logo';
import Searchbar from "./Searchbar.jsx";

export default function DesktopNav() {

    return (
        <>
            <section className="flex items-center justify-center bg-black border-b-2 w-full">

                <div className="flex">
                    <Link to="/" className="p-5">
                        <img src="https://img.icons8.com/laces/64/facc15/home.png" alt="home" className="w-8" />
                    </Link>
                    <Link to="/saved" className="p-5">
                        <img src="https://img.icons8.com/pastel-glyph/64/FFFFFF/hearts---v2.png" alt="saved items" className="w-8" />
                    </Link>
                </div>

                <Logo fs="30px" />

                <div className="flex items-center pr-5">
                    <Link to="/shop">
                        <img src="https://img.icons8.com/external-outline-andi-nur-abdillah/64/FFFFFF/external-makeup-morning-routine-outline-outline-andi-nur-abdillah.png" alt="shop page" className="w-12" />
                    </Link>
                    <Link to="/cart" className="p-5">
                        <img src="https://img.icons8.com/laces/64/FFFFFF/shopping-cart.png" alt="cart" className="w-12" />
                    </Link>
                </div>
                <div className="flex absolute right-8">
                    <img src="https://img.icons8.com/ios/50/FFFFFF/google-web-search.png" alt="search icon" className="pl-4 cursor-pointer" />
                    <input type="search" className="round-lg bg-transparent border-b-2" />
                </div>
            </section>
        </>
    );
}