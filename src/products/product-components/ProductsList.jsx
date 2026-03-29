import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ products, pCol }) => {
  return (
    <div
      className="products"
      style={{
        gridTemplateColumns: `repeat(${pCol},221px)`,
      }}
    >
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
