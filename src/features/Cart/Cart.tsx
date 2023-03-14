import UserInfo from "./UserInfo/UserInfo";
import CartItems from "./CartItems/CartItems";

import styles from './Cart.module.scss'

const Cart = () => {
  return (
    <main className={styles.cartPage}>
      <div className={styles.checkoutUserInfo}>
        <UserInfo />
      </div>
      <div className={styles.checkoutItems}>
        <CartItems />
      </div>
    </main>
  )
}

export default Cart;