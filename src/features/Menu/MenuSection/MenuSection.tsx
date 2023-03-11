import styles from './MenuSection.module.scss';

import MenuList from '../MenuList/MenuList';

import type { MenuCategory, MenuItem } from '../../../app/dataTypes';

type MenuSectionType = Omit<MenuCategory, 'id'>;

const MenuSection = ({name, items}: MenuSectionType) => {

  const menuItems = items.map((item: MenuItem) => <MenuList item={item} key={item.id} />);

  return (
    <section className={styles.menuSection}>
      <h2>{name}</h2>

      <div className={styles.articleWrap}>
        {menuItems}
      </div>
    </section>
  );
}

export default MenuSection;