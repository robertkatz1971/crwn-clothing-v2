import Button from '../button/button.component.jsx';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component.jsx';
import { CartContext } from '../../contexts/cart.context.jsx';
import { useContext } from 'react';

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                { cartItems.map(item => <CartItem key={item.id} cartItem={item} />) }
            </div>
            <div>
                Total Price: ${cartItems.reduce(
                    (total, currentItem) => total + (currentItem.price * currentItem.quantity), 0)
                } 
            </div>
            <Button>Checkout</Button>
        </div>
    )
};

export default CartDropdown;