import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function BestProducts() {
  return (
    <>
      <section>
        <h2>베스트 상품</h2>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </>
  );
}

export default BestProducts;
