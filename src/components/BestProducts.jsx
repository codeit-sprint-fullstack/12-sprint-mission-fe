import React, { useMemo } from "react";
import CardBest from "./CardBest";
import styles from "../styles/UsedMarket.module.css";
import { useProducts } from "../hooks/useProducts";

const BestProducts = ({ isMobile, isTablet }) => {
  const pageSize = useMemo(() => {
    if (isMobile) return 1; // 모바일 (1열)
    if (isTablet) return 2; // 태블릿 (2열)
    return 4; // 데스크탑 (4열)
  }, [isMobile, isTablet]);

  const { products } = useProducts(1, pageSize, "best");

  return (
    <section className={styles.bestListContainer}>
      <h2 className="text-xl bold">베스트 상품</h2>
      <ul className={`${styles.bestProductsList}`}>
        {products.map((item) => {
          return <CardBest bestProduct={item} key={item.id} />;
        })}
      </ul>
    </section>
  );
};

export default BestProducts;
