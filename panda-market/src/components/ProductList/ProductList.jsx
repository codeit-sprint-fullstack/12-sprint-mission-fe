import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

function ProductList() {
  return (
    <>
      <section className={styles.ProductList}>
        <div>
          <h2 className={styles.listH2}>판매중인 상품</h2>
        </div>
        <div className={styles.listGrid}>
          <ProductCard title="로봇 청소기" price={1500000} heartCount={240} />
          <ProductCard title="로봇 청소기" price={1500000} heartCount={240} />
          <ProductCard title="로봇 청소기" price={1500000} heartCount={240} />
          <ProductCard title="로봇 청소기" price={1500000} heartCount={240} />
          <ProductCard title="로봇 청소기" price={1500000} heartCount={240} />
          <ProductCard title="로봇 청소기" price={1500000} heartCount={240} />
          <ProductCard title="로봇 청소기" price={1500000} heartCount={240} />
          <ProductCard title="로봇 청소기" price={1500000} heartCount={240} />
          <ProductCard title="로봇 청소기" price={1500000} heartCount={240} />
          <ProductCard title="로봇 청소기" price={1500000} heartCount={240} />
        </div>
      </section>
    </>
  );
}

export default ProductList;
