import styles from './Button.module.scss';

import Spinner from '../Spinner/Spinner';

import type { ButtonType } from '../../app/dataTypes';

const Button = ({name, handleClick, type = '', price, isLoading = false}: ButtonType) => {
  const extraClass = styles[type] || '';

  return (
    <button
      className={`${styles.button} ${extraClass} ${isLoading ? styles.disabled : ''}`}
      onClick={e => handleClick(e)}
      data-testid="button">
        {price && 
          <span className={styles.price}>{price} EUR</span>
        }
        <span className={styles.buttonName}>{name}</span>

        {isLoading && 
          <Spinner />
        }
    </button>
  );
}

export default Button;