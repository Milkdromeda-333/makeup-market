import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";

export default function Layout() {


    // NAV FUNCTIONALITY

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1236);

    // NOTE: @ 976 px my nav layout breaks bc of the searchbar
    // and 1236 is when the searchbar hits the rest of the nav
    const updateMedia = () => {
        setDesktop(window.innerWidth > 1236);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, []);

    return (

        <div className="flex flex-col h-full min-h-[100vh]">

            {/* NAV */}
            <nav className="text-white w-full">
                {!isDesktop ? <MobileNav /> : <DesktopNav />}
            </nav>

            {/* OUTLET */}
            <Outlet />

            {/* FOOTER */}
            <footer className="bg-black text-white w-full border-t-2 mt-auto">

                <div id="sign-up-form" className="flex flex-col justify-center items-center p-8 min-[1119px]:flex-row md:justify-center">

                    {/* SIGN UP */}
                    <div className="flex flex-col justify-center items-center w-full lg:flex-row md:justify-center  min-[1131px]:border-r-2">

                        <div className="mb-8 md:mb-0">
                            <h3 className="text-4xl pb-4 underline decoration-hot-pink-50">Sign up for:</h3>
                            <ul className="list-disc list-inside text-xl relative left-4">
                                <li>promotions</li>
                                <li>sales</li>
                                <li>offers</li>
                            </ul>
                        </div>

                        {/* EMAIL SECTION */}
                        <div className="flex justify-center items-end flex-wrap">
                            <input type="email" name="email" className="h-min w-3/4 mr-2 outline-none border-hot-pink-50 border-b-2 bg-transparent md:w-auto" placeholder="email" />
                            <button className="border-2 border-hot-pink-50 px-3 rounded mt-2 w-3/4 md:w-auto hover:bg-hot-pink-50 hover:text-white active:border-black active:bg-hot-pink-100">submit</button>
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div id="contact-info" className="mt-6 w-full h-full flex flex-col justify-center items-center">
                        <h3 className="text-4xl text-center underline decoration-hot-pink-50 pb-2">Get in touch:</h3>

                        <div className="flex gap-2 text-white">
                            <a href="tel:2223351458">
                                <i class="bi bi-headset text-3xl hover:text-yellow-400" />
                            </a>
                            <a href="#">
                                <i class="bi bi-chat-left-dots text-3xl hover:text-hot-pink-50" />
                            </a>
                            <a href="#">
                                <i class="bi bi-envelope text-3xl hover:text-yellow-400" />
                            </a>
                        </div>
                        <div className="flex gap-2">
                            <a href="#">
                                <i class="bi bi-facebook text-3xl hover:text-yellow-400" />
                            </a>
                            <a href="#">
                                <i class="bi bi-twitter text-3xl hover:text-hot-pink-50" />
                            </a>
                            <a href="#">
                                <i class="bi bi-instagram text-3xl hover:text-yellow-400" />
                            </a>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
}