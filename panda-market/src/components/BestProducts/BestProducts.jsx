import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./BestProducts.module.css";

function BestProducts({ bestProducts }) {
  return (
    <>
      <section className={styles.bestProducts}>
        <h2 className={styles.bestH2}>베스트 상품</h2>
        <div className={styles.bestGrid}>
          {bestProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              price={product.price}
              heartCount={product.heartCount}
              image={product.images?.[0]}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default BestProducts;
