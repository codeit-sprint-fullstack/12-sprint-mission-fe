import React, { useState } from "react";
import styles from "./OnSaleProducts.module.css";
import { OnSaleProductHeader } from "./OnSaleProductHeader";
import { OnSaleProductList } from "./OnSaleProductList";

export const OnSaleProducts = () => {
  const [products, setProducts] = useState([]);

  return (
    <section className={styles.section}>
      <OnSaleProductHeader />
      <OnSaleProductList products={products} />
    </section>
  );
};
