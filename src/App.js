import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { CartProvider } from "./components/CartContext";
import Main from "./components/Main";

// import { collectionProd } from "./config/firebase";
// import { addDoc } from "firebase/firestore";
// import productos from "./utils/productos";

// productos.map((product) => addDoc(collectionProd, product));

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Main />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
