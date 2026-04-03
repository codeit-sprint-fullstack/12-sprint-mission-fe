import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./pages/productList";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;
