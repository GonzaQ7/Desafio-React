import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { CartProvider } from "./components/CartContext";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";

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
