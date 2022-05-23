import { CartContext } from '../../../contexts/cart.context';
import { useContext } from 'react';
import CheckoutItem from '../../checkout-item/checkout-item.component';
import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart, deleteProductFromCart, totalPrice } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>
            </div>
            {cartItems && cartItems.map((item) => {        
                    return (
                        <CheckoutItem 
                            item={item} 
                            key={item.id} 
                            addItemToCart={addItemToCart} 
                            removeItemFromCart={removeItemFromCart}
                            deleteProductFromCart={deleteProductFromCart} />
                    )
                })}
            <span className='total'>
                Total Price: ${totalPrice}
            </span>
        </div>

    )
};

export default Checkout;