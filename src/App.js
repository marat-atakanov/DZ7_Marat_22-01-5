import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import {NavBar} from "./components/NavBar";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ProductsPage/>}/>
            <Route path="cart" element={<CartPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
