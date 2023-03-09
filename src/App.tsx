import './App.scss';

import { Routes, Route} from "react-router-dom";
import { useAppSelector } from './app/hooks';

import Navbar from './components/Navbar/Navbar';
import Menu from './features/Menu/Menu';
import Info from './features/Info/Info';
import Cart from './features/Cart/Cart';
import PageNotFound from './features/PageNotFound/PageNotFound';
import Modal from './components/Modal/Modal';

import MenuModal from './features/Menu/MenuModal/MenuModal';

function App() {
  const isModalOpen = useAppSelector(state => state.modal.isOpen);
  const modalContent = useAppSelector(state => state.modal.contentType);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Menu />} />
          <Route path="info" element={<Info />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>

      {isModalOpen &&
        <Modal>
          {modalContent === 'addItemToCart' &&
            <MenuModal />
          }
        </Modal>
      }
    </div>
  );
}

export default App;
