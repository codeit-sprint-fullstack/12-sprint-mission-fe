import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./pages/productList";

import { Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {}, []);

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
