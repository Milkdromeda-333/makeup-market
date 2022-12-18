import Logo from './Logo';
import CartedItemCard from './CartedItemCard';

export default function CartModalCheckout(props) {

    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-black/50 backdrop-blur-lg text-white fixed w-full h-full z-20 top-0'>

                <span className='bi bi-x text-white text-6xl absolute top-0 right-4' onClick={props.closeModal}></span>

                <h2 className='text-3xl mt-2'>Thank you for your purchase. What a great value for <span className="text-green-500">${props.total.toFixed(2)}</span>!</h2>

                <p className='text-2xl mt-2 text-yellow-400'>Heres your recipt:</p>

                <div className={props.cartedItemsArr.length > 5 ? "overflow-y-scroll pr-8" : undefined}>

                    {props.cartedItemsArr.map(item => <CartedItemCard key={item.id} {...item} isBeforePurchase={false} />)}

                </div>
                <Logo fs="25px" />
            </div>

        </div>
    );
}