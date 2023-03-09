import { useAppSelector } from "../../../app/hooks";
import type { CartItem } from "../../../app/dataTypes";

import { useDispatch } from 'react-redux';

import { removeFromCart } from "../cartSlice";

import styles from './CartItems.module.scss'

import {ReactComponent as Delete} from '../../../assets/close.svg';

const CartItems = () => {

  const items = useAppSelector(state => state.cart.items);
  const dispatch = useDispatch();
  
  const cartItems = items.map((el: CartItem) => 
    <div className={styles.items} key={el.item.id}>
      <span>{el.quantity}x</span>
      <span className={styles.item}>{el.item.name}</span>
      <span className={styles.price}>{el.item.price} RON</span>
      <span>
        <button
          className={styles.btnDelete}
          onClick={() => dispatch(removeFromCart(el.item.id))}
        >
          <Delete />
        </button>
      </span>
    </div>
  );

  return (
    <>
      <div className={styles.header}>
        <span>Qty</span>
        <span className={styles.headerItem}>Item</span>
        <span>Price</span>
      </div>

      <div>
        {cartItems}
      </div>
      
      <div className={styles.total}>
        <div>Total</div>
        <div>154 RON</div>
      </div>
    </>
  );
}

export default CartItems;