import Logo from './Logo';
import CartedItemCard from './CartedItemCard';

export default function CartModalCheckout(props) {

    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-black/50 backdrop-blur-lg text-white fixed w-full h-full z-20 top-0'>

                <span className='bi bi-x text-white text-5xl md:text-6xl ml-auto' onClick={props.closeModal}></span>

                <span className='text-lg md:text-3xl mt-2 px-2 text-center'>

                    Thank you for your purchase. What a great value for&nbsp;

                    <span className="text-green-500">
                        ${props.total.toFixed(2)}!
                    </span>
                </span>

                <p className='text-lg md:text-2xl mt-2 text-yellow-400 px-4'>Heres your recipt:</p>

                <div className={`${props.cartedItemsArr.length > 3 && "overflow-y-scroll"} w-full md:w-1/2 mb-2`}>

                    {props.cartedItemsArr.map(item => <CartedItemCard key={item.id} {...item} isBeforePurchase={false} />)}

                </div>
                <Logo fs="25px" />
            </div>

        </div >
    );
}