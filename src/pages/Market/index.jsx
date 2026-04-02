import React from "react";
import { BestProducts } from "./BestProducts/BestProducts";
import { OnSaleProducts } from "./OnSaleProducts/OnSaleProducts";
import styles from "./Market.module.css";

export const Market = () => {
  return (
    <main className={styles.container}>
      <BestProducts />
      <OnSaleProducts />
    </main>
  );
};
