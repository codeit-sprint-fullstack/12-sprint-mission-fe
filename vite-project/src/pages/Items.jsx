import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SaleProduct from "../components/SaleProduct";
import "./Items.css";

const Items = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="items-container">
          <SaleProduct page={1} orderBy="recent" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Items;
