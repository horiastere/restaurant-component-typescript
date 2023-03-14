import styles from './Menu.module.css';

import { useAppSelector } from '../../app/hooks';

import MenuSection from './MenuSection/MenuSection';
import type { MenuCategory } from '../../app/dataTypes';

const Menu = () => {
  const menuItems = useAppSelector(state => state.menu.items)
  const heroImage = {
    backgroundImage: 'url("https://tazzcdn.akamaized.net/uploads/cover/cover_HRC_1920x1080.jpg")'
  };

  return (
    <main>
      <div style={heroImage} className={styles.hero}>
        <div className={styles.logo}>
          <img
            src={'https://tazzcdn.akamaized.net/uploads/logo/sigla_HRC.png'}
            alt="logo"
            height="100%"
            width="100%"
          />
        </div>
      </div>

      {menuItems.length > 0 && menuItems.map((item: MenuCategory) => {
        return <MenuSection key={item.id} name={item.name} items={item.items} />
      })}
    </main>
  )
}

export default Menu;