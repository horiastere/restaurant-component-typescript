import styles from './UserInfo.module.scss';

import Button from '../../../components/Button/Button';
import React from 'react';

const UserInfo = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // TODO
    console.log('send order data');
  }

  return (
    <div className={styles.userInfoWrap}>
      <h4>Your info</h4>
      <form>
        <input type="text" placeholder="Name" />

        <input type="text" placeholder="Surname" />
        <input
          type="email"
          placeholder="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <input type="tel" placeholder="Telephone" />

        <div>
          <Button name="Place Order" handleClick={e => handleClick(e)} />
        </div>
      </form>
    </div>
  );
}

export default UserInfo;