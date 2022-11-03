import Logo from './Logo';
import CartedItemCard from './CartedItemCard';
import { Context } from './UserShoppingContext';
import { useContext } from 'react';

export default function CartModalCheckout(props) {

    const { cartedItems } = useContext(Context);

    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-black/50 backdrop-blur-lg text-white fixed w-full h-full z-20 top-0'>
                <span className='bi bi-x text-white text-6xl absolute top-0 right-4' onClick={props.closeModal}></span>
                <h2 className='text-3xl'>Thank you for your purchase. What a great value for <span className="text-green-500">${props.total}</span>!</h2>
                <p>Heres your recipt:</p>
                <div>
                    {cartedItems.map(item => <CartedItemCard {...item} isBeforePurchase={false} />)}
                </div>
                <Logo fs="25px" />
            </div>

        </div>
    );
}