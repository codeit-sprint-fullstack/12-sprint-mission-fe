import React from "react";
import BestProducts from "./product-components/BestProducts";
import ProductsOnSale from "./product-components/ProductsOnSale";

const TabletProducts = () => {
  const pCol = 3;
  const bCol = 2;
  return (
    <div className="all-products-container">
      <BestProducts bCol={bCol} />
      <ProductsOnSale pCol={pCol} />
    </div>
  );
};

export default TabletProducts;
