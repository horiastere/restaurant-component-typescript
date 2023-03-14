import styles from './Navbar.module.scss'

import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import { useAppSelector } from '../../app/hooks';

import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import { ReactComponent as InfoIcon } from '../../assets/info.svg';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';

const Navbar = () => {
  const noOfItemsInCart = useAppSelector(state => state.cart.items);
  const [animationKey, setAnimationKey] = useState<number>();
  
  useEffect(() => {
    setAnimationKey(Math.random());
}, [noOfItemsInCart]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <h1 data-testid="title" className={styles.restaurantName}><Link to="/">Hard Rock Cafe</Link></h1>

        <div className={styles.navButtons}>
          <Link to="/"><MenuIcon /></Link>
          <Link to="/info"><InfoIcon /></Link>
          <Link to="/cart"><span key={animationKey} className={styles.cartItems}>{noOfItemsInCart.length}</span><CartIcon /></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;