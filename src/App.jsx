import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Shop from "./components/Shop";
import Home from "./components/Home";

/*

TODO:
[] set up searchbar

go back and do:
[] add transition to closing mobile nav
[] add a secondary header to desktop nav
[] imporve header
[] add hover affect to nav icons that will start left to right
[] add effect after submit for sign up form @ home
[] add nav to footer

*/
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
