import { Link, Outlet } from "react-router-dom";
import Logo from "../Logo.jsx";

export default function Layout() {

    return (
        <div className="flex flex-col min-h-full">

            <nav className="bg-black text-white w-full">

                {/* Logo nav section */}
                <section className="flex items-center">

                    <div className="mr-auto flex">
                        <Link to="/" className="p-5">
                            <img src="https://img.icons8.com/laces/64/FFFFFF/home.png" alt="home" className="w-7" />
                        </Link>
                        <Link to="/saved" className="p-5">
                            <img src="https://img.icons8.com/pastel-glyph/64/FFFFFF/hearts---v2.png" alt="saved items" className="w-7" />
                        </Link>
                    </div>

                    <Logo fs="30" />

                    <div className="ml-auto flex items-center pr-5">
                        <Link to="/shop">
                            <img src="https://img.icons8.com/external-outline-andi-nur-abdillah/64/FFFFFF/external-makeup-morning-routine-outline-outline-andi-nur-abdillah.png" alt="shop page" className="w-7" />
                        </Link>
                        <Link to="/cart" className="p-5">
                            <img src="https://img.icons8.com/laces/64/FFFFFF/shopping-cart.png" alt="cart" className="w-7" />
                        </Link>
                        <div className="flex">
                            <img src="https://img.icons8.com/ios/50/FFFFFF/google-web-search.png" alt="search icon" className="pl-4 h-8" />
                            <input type="search" className="round-lg h-8" />
                        </div>
                    </div>

                </section>
                <section>
                </section>
            </nav>

            <Outlet className="mb-16" />
            <i class="bi bi-balloon-heart text-white"></i>

            <footer className="bg-black text-white w-full h-16 absolute bottom-0">

            </footer>
        </div>
    );
}