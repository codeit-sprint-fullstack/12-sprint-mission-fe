import React from "react";
import styles from "./ProductListPage.module.css";
import { BestProducts } from "../components/BestProducts/BestProducts";
import { OnSaleProducts } from "../components/OnSaleProducts/OnSaleProducts";

export const ProductListPage = () => {
  return (
    <main className={styles.container}>
      <BestProducts />
      <OnSaleProducts />
    </main>
  );
};
