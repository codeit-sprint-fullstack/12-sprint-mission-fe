import React, { useEffect } from "react";
import { usePageSize } from "../../hooks/usePageSize";
import { useProducts } from "../../hooks/useProducts";
import { BestProductList } from "./BestProductList";
import styles from "./BestProducts.module.css";

export const BestProducts = () => {
  const pageSize = usePageSize({ mobile: 1, tablet: 2, desktop: 4 });
  const { products } = useProducts({ pageSize, orderBy: "favorite" });

  return (
    <section className={styles.section}>
      <h2 className={`${styles.title} text-xl-bold`}>베스트 상품</h2>
      <BestProductList products={products} />
    </section>
  );
};
