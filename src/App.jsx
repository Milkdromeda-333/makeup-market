import { Routes, Route } from "react-router-dom";
import { ProductsContext } from "./components/ProductsContext.jsx";
import { UserShoppingContext } from "./components/UserShoppingContext.jsx";
import Layout from "./components/Layout.jsx";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Saved from "./components/Saved.jsx";
import Cart from "./components/Cart.jsx";

/*

TODO:
[] set up searchbar

go back and do:
[] add transition to closing mobile nav
[] imporve header button
[] add hover affect to nav icons that will start left to right
[] make smaller components (new branch pls)

*/
function App() {

  return (
    <ProductsContext>
      <UserShoppingContext>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="saved" element={<Saved />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </UserShoppingContext>
    </ProductsContext>
  );
}

export default App;
