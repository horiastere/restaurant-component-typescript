import styles from './Navbar.module.css'

import { Link } from "react-router-dom";

import { useSelector } from 'react-redux';

// import { noOfItemsInCart } from '../../features/Cart/cartSlice';

import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import { ReactComponent as InfoIcon } from '../../assets/info.svg';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';

const Navbar = () => {
  const noOfItemsInCart: [] = [];
  // const noItemsInCart = useSelector(noOfItemsInCart);
  
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.restaurantName}>Blue Margarita</h1>

      <div className={styles.navButtons}>
        <Link to="/"><MenuIcon /></Link>
        <Link to="/info"><InfoIcon /></Link>
        <Link to="/cart"><span key={Math.random()} className={styles.cartItems}>{noOfItemsInCart}</span><CartIcon /></Link>
      </div>
    </nav>
  )
}

export default Navbar;