import styles from './Checkbox.module.css';

import formatPrice from '../../app/Util';
import type { ExtraOptionsType } from '../../app/dataTypes';

import { ReactComponent as CheckboxImg } from '../../assets/checkmark.svg';

interface propsType {
  option: ExtraOptionsType;
  handleOptionSelect: (option: ExtraOptionsType) => void;
}

const Checkbox = ({option, handleOptionSelect}: propsType) => {
  const [price, decimal] = formatPrice(option.price);
  return (
    <div className={styles.checkboxWrap}>
      <input type="checkbox" onChange={() => handleOptionSelect(option)} id={`${option.id}`} />
      <label htmlFor={`${option.id}`}>
        <span className={styles.checkbox}>
          <CheckboxImg width="12" height="12" fill="#666666" />
        </span>
        <span className={styles.optionName}>
          {option.name}
        </span>
        <span>
          +{price}.{decimal}
        </span>
      </label>
    </div>
  );
}

export default Checkbox;