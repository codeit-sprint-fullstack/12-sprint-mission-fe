import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BestProduct from "../components/BestProduct";
import "./Market.css";
import SaleProduct from "../components/SaleProduct";

const Market = () => {
  return (
    <div>
      <Header />
      <main className="main-container">
        <section className="best-prodct">
          <BestProduct page={1} pageSize={4} orderBy="favorite" />
        </section>
        <section className="sale-prodct">
          <SaleProduct page={1} pageSize={10} orderBy="recent" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Market;
