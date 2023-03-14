import { useAppSelector } from "../../../app/hooks";
import type { CartItem } from "../../../app/dataTypes";

import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { removeFromCart } from "../cartSlice";

import Price from "../../../components/Price/Price";
import Button from "../../../components/Button/Button";

import styles from './CartItems.module.scss'

import {ReactComponent as Delete} from '../../../assets/delete.svg';
import React from "react";

const CartItems = () => {

  const items = useAppSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  }

  const cartItems = items.map((el: CartItem) => {

    return (
      <div className={styles.item} key={el.item.id}>
        {el.item.thumbnail && 
          <div className={styles.thumbnail}>
            <img
              src={el.item.thumbnail}
              alt={el.item.name}
              title={el.item.name}
            />
          </div>
        }

        <div className={styles.itemInfo}>
          <h3>{el.item.name}</h3>
          <p><strong>Extra:</strong> Jalapenos, Cheese</p>
          <p><strong>Special mentions:</strong> No salt</p>
        </div>

        <div className={styles.quantity}>
          quantity
        </div>

        <div className={styles.priceContainer}>
          <button
            className={styles.btnDelete}
            onClick={() => dispatch(removeFromCart(el.item.id))}
          >
            <Delete />
          </button>
          <Price fullPrice={el.item.price} />
        </div>
      </div>
    );
  });

  return (
    <>
      {items.length > 0 ? 
        <>
          {cartItems}

          <div className={styles.total}>
            Total: 154 RON
          </div>
        </>
      :
        <div className={styles.emptyCart}>
          <strong>Cart is empty</strong>

          <div>
            <Button name="Got to menu" handleClick={e => handleGoToMenu(e)} />
          </div>
        </div>
      } 
    </>
  );
}

export default CartItems;