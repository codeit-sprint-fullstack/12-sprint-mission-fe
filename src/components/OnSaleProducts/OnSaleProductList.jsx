import React from "react";
import { ProductCard } from "../common/ProductCard/ProductCard";
import styles from "./OnSaleProductList.module.css";

export const OnSaleProductList = ({ products }) => {
  return (
    <ul className={styles.productList}>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} size="pc" />
      ))}
    </ul>
  );
};
