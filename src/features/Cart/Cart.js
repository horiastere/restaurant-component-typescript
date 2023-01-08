import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  
  const cartItems = items.map(el => 
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