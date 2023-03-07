import styles from './MenuSection.module.scss';

import MenuList from '../MenuList/MenuList';

import type { MenuCategory, MenuItem } from '../../../app/dataTypes';

type MenuSectionType = Omit<MenuCategory, 'id'>;

const MenuSection = ({name, items}: MenuSectionType) => {
  const half = Math.ceil(items.length / 2);
  const firstHalfArr = items.slice(0, half);
  const secondHalfArr = items.slice(half);

  const renderItems = (arr: MenuItem[]) => {
    return arr.map(item => <MenuList item={item} key={item.id} />)
  }

  return (
    <section className={styles.menuSection}>
      <h2>{name}</h2>

      <div className={styles.articleWrap}>
        <div className={styles.articleColumn}>
          {renderItems(firstHalfArr)}
        </div>
        <div className={styles.articleColumn}>
          {renderItems(secondHalfArr)}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;