import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/itemListContainer/itemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./pages/Cart/Cart";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} /> 
        
        <Route path="*" element={<div><h1>La página que estás buscando no se <br></br>encuentra o no existe, inténtalo nuevamente...</h1></div>} />
      </Routes>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
