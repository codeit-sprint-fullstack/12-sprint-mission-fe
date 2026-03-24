import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BestProducts from "../../components/BestProducts/BestProducts";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductList from "../../components/ProductList/ProductList";
import Pagination from "../../components/Pagination/Pagination";

function MarketPage() {
  return (
    <>
      <Header />
      <div>
        <BestProducts />
        <ProductList />
        <ProductCard />
      </div>
      <Footer />
    </>
  );
}

export default MarketPage;
