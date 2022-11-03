import { Link } from 'react-router-dom';
import Logo from './Logo';
import Searchbar from "./Searchbar.jsx";
import 'animate.css';

export default function MobileNav({ navToggleFunc, isNavOpen }) {

    return (
        <>
            <div className="grid place-items-center w-full bg-black p-4 border-b-[1px] relative">

                <Logo fs="20px" className="" />

                <img src="https://img.icons8.com/material-outlined/24/FFFFFF/menu--v1.png" alt="nav toggler" className="w-10 p-2 absolute right-3 top-0" onClick={navToggleFunc} />



            </div>

            <div className={`${isNavOpen ? "flex" : "hidden"} flex-col text-center pt-4 items-center bg-[#000000D9] backdrop-blur-sm absolute z-50 w-full animate__animated animate__fadeInDown animate__faster`} aria-hidden="true" aria-label="Nav">
                <Searchbar />
                <Link to="/" className="nav-items">Home</Link>
                <Link to="/saved" className="nav-items">Saved Items</Link>
                <Link to="/shop" className="nav-items">SHOP</Link>
                <Link to="/cart" className="nav-items">Cart</Link>
            </div>
        </>
    );
}