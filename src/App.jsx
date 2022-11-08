import { Routes, Route } from "react-router-dom";
import { ProductsContext } from "./components/ProductsContext.jsx";
import { UserShoppingContext } from "./components/UserShoppingContext.jsx";
import Layout from "./components/Layout.jsx";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Saved from "./components/Saved.jsx";
import Cart from "./components/Cart.jsx";
import ShopBrands from "./components/ShopBrands.jsx";
import ShopCategories from "./components/ShopCategories.jsx";
import ShopByPrice from "./components/ShopByPrice.jsx";
import ShopByTag from "./components/ShopByTag.jsx";
import ShopByBrand from "./components/ShopByBrand.jsx";
import ShopByCategory from "./components/ShopByCategory.jsx";

/*

TODO:
[] set up searchbar

go back and do:
[] add transition to closing mobile nav
[] imporve header button
[] add hover affect to nav icons that will start left to right
[] make smaller components (new branch pls)

DOING RN:

- figure out how t oproperly use router and useParams and Link paths ok
- figureo out why my aray isnt rendering fr some  product cards
*/
function App() {

  return (
    <ProductsContext>
      <UserShoppingContext>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />

            <Route path="shop" element={<Shop />} />

            {/* DOCS: How does one make this work as a nested path? */}
            <Route path="/shop/shop-by-brand" element={<ShopBrands />} />
            <Route path="/shop/shop-by-brand/:brand" element={<ShopByBrand />} />
            <Route path="/shop/shop-by-category" element={<ShopCategories />} />
            <Route path="/shop/shop-by-category/:category" element={<ShopByCategory />} />
            <Route path="/shop/shop-by-price" element={<ShopByPrice />} />
            <Route path="/shop/tags/:tag" element={<ShopByTag />} />

            {/* <Route path="/shop" element={<Shop />}>
              <Route path=":category" element={<Products />} />
            </Route> */}

            <Route path="saved" element={<Saved />} />

            <Route path="cart" element={<Cart />} />

          </Route>
        </Routes>
      </UserShoppingContext>
    </ProductsContext>
  );
}

export default App;
