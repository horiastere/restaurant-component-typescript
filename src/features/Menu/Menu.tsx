import styles from './Menu.module.css';

import { useSelector } from 'react-redux';

import MenuSection from './MenuSection/MenuSection';
// import Modal from '../../components/Modal/Modal';

import type { MenuCategory } from '../../app/dataTypes';

import { RootState } from '../../app/store';

// TODO TypeScript
// interface RootState {
//   menu: {
//     items: []
//   }
// }

const Menu = () => {
  const menuItems = useSelector((state: RootState) => state.menu.items)
  
  // const isModalOpen = useSelector(state => state.modal.isOpen)

  return (
    <main>
      <div className={styles.hero}></div>

      {menuItems.length > 0 && menuItems.map((item: MenuCategory) => {
        return <MenuSection key={item.id} name={item.name} items={item.items} />
      }
      
      )}
      
      {/* {isModalOpen &&
        <Modal />
      } */}
      
    </main>
  )
}

export default Menu;