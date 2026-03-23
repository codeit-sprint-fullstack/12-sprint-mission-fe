import React from "react";
import styles from "./ProductListPage.module.css";
import { BestProducts } from "../components/BestProducts/BestProducts";

export const ProductListPage = () => {
  return (
    <main className={styles.container}>
      <BestProducts />
    </main>
  );
};
