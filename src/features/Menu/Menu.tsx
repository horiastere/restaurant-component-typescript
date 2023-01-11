import styles from './Menu.module.css';

import { useAppSelector } from '../../app/hooks';

import MenuSection from './MenuSection/MenuSection';
import type { MenuCategory } from '../../app/dataTypes';

const Menu = () => {
  const menuItems = useAppSelector(state => state.menu.items)
  

  return (
    <main>
      <div className={styles.hero}></div>

      {menuItems.length > 0 && menuItems.map((item: MenuCategory) => {
        return <MenuSection key={item.id} name={item.name} items={item.items} />
      })}
    </main>
  )
}

export default Menu;