import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Context } from "./UserShoppingContext.jsx";
import Searchbar from "./Searchbar.jsx";
import { useContext } from 'react';

export default function DesktopNav() {
    const { cartedItems } = useContext(Context);

    return (
        <>
            <section className="flex flex-row items-center justify-center bg-black border-b-2 w-full p-4">

                <div className="flex flex-row justify-evenly items-center gap-8 pr-8">
                    <Link to="/" className="">
                        <img src="https://img.icons8.com/laces/64/facc15/home.png" alt="home" className="w-10" />
                    </Link>
                    <Link to="/saved" className="">
                        <i className="bi bi-bookmark-heart text-white text-[1.8rem]"></i>
                    </Link>
                </div>

                <Logo fs="30px" />

                <div className="flex flex-row justify-evenly items-center pl-8 gap-8">
                    <Link to="/shop">
                        <img src="https://img.icons8.com/external-outline-andi-nur-abdillah/64/FFFFFF/external-makeup-morning-routine-outline-outline-andi-nur-abdillah.png" alt="shop page" className="w-10" />
                    </Link>
                    <Link to="/cart" className="relative">
                        <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/50/FFFFFF/external-Cart-shopping-those-icons-lineal-those-icons-2.png" alt="cart" className="w-10" />
                        <span className='absolute -right-2 -bottom-[5px] text-hot-pink-50 font-bold hover:text-hot-pink-50'>
                            {cartedItems.length}
                        </span>
                    </Link>
                </div>
                <div className="flex absolute right-8">
                    <Searchbar />
                </div>
            </section>
        </>
    );
}