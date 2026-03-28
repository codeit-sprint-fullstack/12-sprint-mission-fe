import React from "react";
import { usePageSize } from "../../hooks/usePageSize";
import { useProducts } from "../../hooks/useProducts";
import { ProductCard } from "../common/ProductCard/ProductCard";
import styles from "./BestProducts.module.css";

export const BestProducts = () => {
  const pageSize = usePageSize({ mobile: 1, tablet: 2, desktop: 4 });
  const { products } = useProducts({ pageSize, orderBy: "favorite" });

  return (
    <section className={styles.section}>
      <h2 className={`text-xl-bold ${styles.title}`}>베스트 상품</h2>
      <ul className={styles.productList}>
        {products.map((item) => (
          <ProductCard key={item.id} item={item} type="best" />
        ))}
      </ul>
    </section>
  );
};
