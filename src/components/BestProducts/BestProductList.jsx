import React from "react";
import { ProductCard } from "../common/ProductCard";
import styles from "./BestProductList.module.css";

export const BestProductList = ({ products }) => {
  return (
    <ul className={styles.productList}>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} size="md" />
      ))}
    </ul>
  );
};
