import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import BestList from "./components/BestList";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Layout>
      <BestList />
      {/* 중고마켓 베스트 상품 섹션 */}
      <ProductList />
      {/* 중고마켓 판매 중인 상품 섹션 */}
    </Layout>
  );
}

export default App;
