import { useAppSelector } from "../../app/hooks";
import type { CartItem } from "../../app/dataTypes";

const Cart = () => {
  const items = useAppSelector(state => state.cart.items);
  
  const cartItems = items.map((el: CartItem) => 
    <li key={el.item.id}>
      <span>{el.item.name}</span>
      <span>{el.item.price} RON</span>
    </li>
  );

  return (
    <>
      <h1>Cart</h1>
      {cartItems}
    </>
  )
}

export default Cart;