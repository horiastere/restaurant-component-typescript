import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";

import { addToCart } from '../../Cart/cartSlice';

import Checkbox from "../../../components/Checkbox/Checkbox";
import Button from '../../../components/Button/Button';

import type { ExtraOptionsType } from '../../../app/dataTypes';

import styles from './MenuModal.module.css';

const MenuModal = () => {
  const dispatch = useAppDispatch();

  const itemsInCart = useAppSelector(state => state.cart.items);

  const item = useAppSelector(state => state.modal.contentInfo);
  const availableExtraOptions = item.options.map((el: ExtraOptionsType) => ({...el, isChecked: false}));

  const [extraOptions, setExtraOptions] = useState(availableExtraOptions);
  const [extraInstructions, setExtraInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const handleOptionSelect = (option: ExtraOptionsType) => {
    const index = extraOptions.findIndex((el: ExtraOptionsType) => el.id === option.id);
    const options = [...extraOptions];

    if (index >= 0) {
      options.splice(index, 1, {...option, isChecked: !option.isChecked});
      setExtraOptions(options);
    }
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);

    if (val > 0) {
      setQuantity(val);
    }
  }

  const handleQuantityClick = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
    e.preventDefault();
    
    if ( type === 'decrement' && quantity > 1 ) {
      setQuantity(state => state - 1);
    }
    
    if (type === 'increment') {
      setQuantity(state => state + 1);
    }
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isLoading) return;

    dispatch(addToCart({
      item,
      extraOptions,
      extraInstructions,
      quantity
    }))

    setIsLoading(true);
  }

  // disable button for a few ms to discourage multiple clicking
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500)
  }, [itemsInCart])
  
  return (
    <>
      <p>{item.description}</p>

      <form>
        {extraOptions.length > 0 &&
          <>
            <h3>Extra Toppings</h3>
            {extraOptions.map((el: ExtraOptionsType) =>
              <Checkbox
                option={el}
                handleOptionSelect={handleOptionSelect}
                key={el.id}
              />
            )}
          </>
         }

        <h3>Extra Instructions</h3>
        <textarea
          placeholder="Example: no salt/pepper"
          value={extraInstructions}
          onChange={e => setExtraInstructions(e.target.value)}
          className={styles.textarea}
        ></textarea>

        <h3>Quantity</h3>
        <div className={styles.quantityBox}>
          <input value={quantity} onChange={e => handleQuantityChange(e)} />
          <button onClick={e => handleQuantityClick(e, 'decrement')}>-</button>
          <button onClick={e => handleQuantityClick(e, 'increment')}>+</button>
        </div>

        <Button
          name="Add to cart"
          type="addToCart"
          handleClick={e => handleSubmit(e)}
          price="20"
          isLoading={isLoading}
        />
        {/* <Button name="Submit" handleClick={handleSubmit} />
        <Button name="Cancel" type="secondary" handleClick={handleSubmit} /> */}
      </form>
    </>
  )
}

export default MenuModal;