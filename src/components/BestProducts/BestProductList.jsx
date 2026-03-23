import React from "react";
import { BestProductCard } from "./BestProductCard";

export const BestProductList = ({ products }) => {
  return (
    <ul>
      {products.map((item) => (
        <BestProductCard key={item.id} item={item} />
      ))}
    </ul>
  );
};
