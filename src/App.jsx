import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";

/*

TODO:
[] setup nav and footer (mobile-first) in Layout
[] set up searchbar

*/
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
