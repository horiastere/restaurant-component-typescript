import styles from './Button.module.css';

import type { ButtonType } from '../../app/dataTypes';

const Button = ({name, handleClick, type = '', price}: ButtonType) => {
  const extraClass = styles[type] || '';

  return (
    <button
      className={`${styles.button} ${extraClass}`}
      onClick={e => handleClick(e)}>
        {price && 
          <span className={styles.price}>{price} EUR</span>
        }
        <span className={styles.buttonName}>{name}</span>
    </button>
  );
}

export default Button;