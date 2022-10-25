import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";

export default function Layout() {

    // NAV FUNCTIONALITY
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navToggleFunc = () => setIsNavOpen(prev => !prev);
    const [isDesktop, setDesktop] = useState(window.innerWidth > 976);

    // NOTE: @ 976 px my nav layout breaks bc of the searchbar
    const updateMedia = () => {
        setDesktop(window.innerWidth > 976);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, []);

    return (
        <div className="flex flex-col h-full relative">

            <nav className="text-white w-full">
                {!isDesktop ? <MobileNav navToggleFunc={navToggleFunc} isNavOpen={isNavOpen} /> : <DesktopNav />}
            </nav>

            <Outlet className="" />

            <footer className="bg-black text-white w-full h-16 absolute bottom-0">

            </footer>
        </div>
    );
}