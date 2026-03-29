import React from "react";
import Navigation from "./commons/Navigation";
import Footer from "./commons/Footer";
import Products from "./products/Products";
import "./App.css";
import "./reset.css";

const App = () => {
  //여기에서 공통영역인 Navigation, footer영역 로드하고, 가운데에 Products 넣기
  return (
    <div>
      <Navigation />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
