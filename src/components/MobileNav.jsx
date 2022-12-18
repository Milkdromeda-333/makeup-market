import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import Searchbar from "./Searchbar.jsx";
import 'animate.css';
import { useState } from 'react';

export default function MobileNav() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const navToggleFunc = () => setIsNavOpen(prev => !prev);

    const navigate = useNavigate();

    const navigateAway = (toggleTo) => {
        navToggleFunc();
        navigate(toggleTo);
    };

    return (
        <>
            <div className="grid place-items-center w-full bg-black p-4 border-b-[1px] relative">

                <Logo fs="18px" className="px-8" />

                <img src="https://img.icons8.com/material-outlined/24/FFFFFF/menu--v1.png" alt="nav toggler" className="w-10 p-2 absolute right-3 top-0" onClick={navToggleFunc} />

            </div>

            <div className={` absolute ${isNavOpen ? "top-20" : "top-[-100%]"} flex flex-col text-center pt-4 items-center bg-[#000000D9] backdrop-blur-sm z-50 w-full transition-all`} id="navDropDown" aria-label="Nav">
                <Searchbar />
                <a onClick={() => navigateAway("/")} className="nav-items">Home</a>
                <a onClick={() => navigateAway("/saved")} className="nav-items">Saved Items</a>
                <a onClick={() => navigateAway("/shop")} className="nav-items">Shop</a>
                <a onClick={() => navigateAway("/cart")} className="nav-items">Cart</a>
            </div>
        </>
    );
}