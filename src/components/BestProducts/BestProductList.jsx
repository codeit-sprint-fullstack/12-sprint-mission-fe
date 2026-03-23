import React from "react";
import { BestProductCard } from "./BestProductCard";
import styles from "./BestProductList.module.css";

export const BestProductList = ({ products }) => {
  return (
    <ul className={styles.productList}>
      {products.map((item) => (
        <BestProductCard key={item.id} item={item} />
      ))}
    </ul>
  );
};
