import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo} from '../../../assets/crown.svg';
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils"; 
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component.jsx";
import { CartContext } from '../../../contexts/cart.context.jsx';
import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
      <>
        <div className="navigation"> 
          <Link className="logo-container" to='/'>
           <CrownLogo className="logo" />
          </Link>
          
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop' >
              Shop
            </Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={signOutUser}>Sign Out</span>) 
                : ( 
                <Link className="nav-link" to='/auth'>
                  Sign In
                </Link>
              )
            }
            <CartIcon />
            {isCartOpen && <CartDropdown />}
          </div>
        </div>
        <Outlet />
      </>   
    );
  };

  export default Navigation;