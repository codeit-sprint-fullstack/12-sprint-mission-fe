import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./BestProducts.module.css";

function BestProducts() {
  return (
    <>
      <section className={styles.bestProducts}>
        <h2 className={styles.bestH2}>베스트 상품</h2>
        <div className={styles.bestGrid}>
          <ProductCard
            title="아이패드 미니 팝니다"
            price={500000}
            heartCount={240}
          />
          <ProductCard
            title="아이패드 미니 팝니다"
            price={500000}
            heartCount={240}
          />
          <ProductCard
            title="아이패드 미니 팝니다"
            price={500000}
            heartCount={240}
          />
          <ProductCard
            title="아이패드 미니 팝니다"
            price={500000}
            heartCount={240}
          />
        </div>
      </section>
    </>
  );
}

export default BestProducts;
