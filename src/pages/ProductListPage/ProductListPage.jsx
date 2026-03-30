import React from "react";
import { BestProducts } from "./BestProducts";
import { OnSaleProducts } from "./OnSaleProducts";
import styles from "./ProductListPage.module.css";

export const ProductListPage = () => {
  return (
    <main className={styles.container}>
      <BestProducts />
      <OnSaleProducts />
    </main>
  );
};
