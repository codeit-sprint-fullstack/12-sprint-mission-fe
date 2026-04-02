import React from "react";
import { usePageSize } from "../../../hooks/usePageSize";
import { useProducts } from "../../../hooks/useProducts";
import { ErrorState } from "../../../components/common/ErrorState";
import { ProductCard } from "../../../components/common/ProductCard";
import { ProductCardSkeleton } from "../../../components/common/ProductCard/ProductCardSkeleton";
import styles from "./BestProducts.module.css";

export const BestProducts = () => {
  const pageSize = usePageSize({ mobile: 1, tablet: 2, desktop: 4 });
  const { products, isLoading, error, refetch } = useProducts({
    pageSize,
    orderBy: "favorite",
  });

  return (
    <section className={styles.section}>
      <h2 className={`text-xl-bold ${styles.title}`}>베스트 상품</h2>
      {error ? (
        <ErrorState error={error} onRetry={refetch} />
      ) : (
        <ul className={styles.productList}>
          {isLoading
            ? Array.from({ length: pageSize }).map((_, i) => (
                <ProductCardSkeleton key={i} type="best" />
              ))
            : products.map((item) => (
                <ProductCard key={item.id} item={item} type="best" />
              ))}
        </ul>
      )}
    </section>
  );
};
