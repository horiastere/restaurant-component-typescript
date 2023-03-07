import { useAppSelector } from "../../app/hooks";
import type { CartItem } from "../../app/dataTypes";

import styles from './Cart.module.css'

const Cart = () => {
  const items = useAppSelector(state => state.cart.items);
  
  const cartItems = items.map((el: CartItem) => 
    <li key={el.item.id}>
      <span>{el.item.name}</span>
      <span>{el.item.price} RON</span>
    </li>
  );

  return (
    <main className={styles.cartPage}>
      <div className={styles.cartPageWrap}>
        <div className={`${styles.checkoutColumn} ${styles.checkoutInfo}`}> blb lb bla</div>
        <div className={`${styles.checkoutColumn} ${styles.checkoutCart}`}>{cartItems}</div>
      </div>
    </main>
  )
}

export default Cart;