import styles from './MenuList.module.scss';

import { useDispatch } from 'react-redux';
import { openModal } from '../../../components/Modal/modalSlice';

import Price from '../../../components/Price/Price';

import { ReactComponent as IconGlutenFree } from '../../../assets/gluten-free.svg';
import { ReactComponent as IconVegan } from '../../../assets/vegetarian.svg';

import { MenuItem } from '../../../app/dataTypes';

const MenuList = ({item}: {item: MenuItem}) => {
  const dispatch = useDispatch();

  const openModalMenu = () => {
    dispatch(openModal({contentType: 'addItemToCart', contentInfo: item}));
  }

  const tags = item.tags!.map(tag => {
    let tagName;
    let tagIcon;

    if (tag === 'VEGAN'){
      tagName = 'Vegan';
      tagIcon = <IconVegan />
    } else {
      tagName = 'Gluten Free'
      tagIcon = <IconGlutenFree />
    }
    
    return (
      <div className="tooltip" key={tagName}>
        {tagIcon}
        <span className="tooltipText">{tagName}</span>
      </div>
    )
  })

  return (
    <article className={styles.listItemContainer}
      onClick={openModalMenu}
    >
      <div className={styles.listItem}>
        <div className={styles.description}>
          <div className={styles.titleContainer}>
            <h3>{item.name}</h3>
            {tags.length > 0 && 
              <div className={styles.tags}>
                {tags}
              </div>
            }
          </div>
          
          <p>{item.description}</p>

          <div className={styles.price}>
            <Price fullPrice={item.price} /> {item.currency}
          </div>
        </div>

        {item.thumbnail && 
          <div className={styles.thumbnail}>
            <img
              src={item.thumbnail}
              alt={item.name}
            />
          </div>
        }
      </div>
    </article>
  );
}

export default MenuList;