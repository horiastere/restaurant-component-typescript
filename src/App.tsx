import './App.css';

import { Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Menu from './features/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Menu />} />
          {/* <Route path="info" element={<Info />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
