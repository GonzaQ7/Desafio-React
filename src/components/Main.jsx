import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import Cart from "./Cart";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        ></Route>
        <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
