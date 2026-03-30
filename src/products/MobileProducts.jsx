import React from "react";
import BestProducts from "./product-components/BestProducts";
import ProductsOnSale from "./product-components/ProductsOnSale";

const MobileProducts = () => {
  const pCol = 2;
  const bCol = 1;
  return (
    <div className="all-products-container">
      <BestProducts bCol={bCol} />
      <ProductsOnSale pCol={pCol} />
    </div>
  );
};

export default MobileProducts;
