import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BestProducts from "../../components/BestProducts/BestProducts";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductList from "../../components/ProductList/ProductList";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./MarketPage.module.css";

function MarketPage() {
  return (
    <>
      <Header />
      <div className={styles.products}>
        <BestProducts />
        <ProductList />
      </div>
      <Footer />
    </>
  );
}

export default MarketPage;
