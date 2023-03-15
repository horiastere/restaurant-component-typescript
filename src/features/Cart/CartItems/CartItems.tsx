import React, { useState, useEffect } from "react";

import { useAppSelector } from "../../../app/hooks";
import type { CartItem, ExtraOptionsType } from "../../../app/dataTypes";
import formatPrice from "../../../app/Util";

import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { removeFromCart } from "../cartSlice";

import Price from "../../../components/Price/Price";
import Button from "../../../components/Button/Button";

import styles from './CartItems.module.scss'

import { ReactComponent as Delete } from '../../../assets/delete.svg';

const CartItems = () => {

  const items = useAppSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  }

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(0);
    
    items.forEach((item: CartItem) => {
      setTotalPrice(totalPrice => totalPrice + item.item.price);
    })
  }, [items]);

  const [price, decimal] = formatPrice(totalPrice);

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
          {el.extraOptions.length > 0 &&
            <p>
              <strong>Extra: </strong> 
              {el.extraOptions.map((option: ExtraOptionsType, index) =>  ((index) ? ', ' : '') + option.name)}
            </p>
          }

          {el.extraInstructions &&
            <p><strong>Special mentions:</strong> {el.extraInstructions}</p>
          }
        </div>

        {/* <div className={styles.quantity}>
          quantity
        </div> */}

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
            Total: {price}.{decimal} EUR
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