import CartItems from "./CartItems/CartItems";

import styles from './Cart.module.scss'

const Cart = () => {
  return (
    <main className={styles.cartPage}>
      <div className={styles.cartPageWrap}>
        <div className={styles.checkoutColumn}>
          Checkout info
        </div>
        <div className={styles.checkoutColumn}>
          <CartItems />
        </div>
      </div>
    </main>
  )
}

export default Cart;