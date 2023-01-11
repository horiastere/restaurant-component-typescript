import styles from './MenuList.module.css';

import { useDispatch } from 'react-redux';
import { openModal } from '../../../components/Modal/modalSlice';

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
    <article className={styles.listItem}
      onClick={openModalMenu}
    >
      <div className={styles.description}>
        {item.thumbnail && 
          <img src={item.thumbnail} width="40" height="40" alt="title" className={styles.thumbnail} />
        }
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <div className={styles.listInfo}>
        <div className={styles.price}>{item.price}</div>
        {tags.length > 0 && 
          <div className={styles.tags}>
            {tags}
          </div>
        }
      </div>
    </article>
  );
}

export default MenuList;