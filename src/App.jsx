import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";

import "./css/common/reset.css";
import "./css/common/pattern.css";
import "./css/custom/index.css";
import "./css/custom/login.css";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
