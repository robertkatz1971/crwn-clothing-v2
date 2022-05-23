import Button from '../button/button.component.jsx';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component.jsx';
import { CartContext } from '../../contexts/cart.context.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {

    const { cartItems, totalPrice } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                { cartItems.map(item => <CartItem key={item.id} cartItem={item} />) }
            </div>
            <div>
                Total Price: ${totalPrice}
            </div>
            <Button onClick={() => navigate('/checkout')}>Checkout</Button>
        </div>
    )
};

export default CartDropdown;