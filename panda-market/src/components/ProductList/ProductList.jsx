import React from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./ProductList.module.css";
import SearchInput from "../SearchInput/SearchInput.jsx";
import SortSelect from "../SortSelect/SortSelect.jsx";

function ProductList({ products, orderBy, setOrderBy, keyword, setKeyword }) {
  return (
    <>
      <section className={styles.ProductList}>
        <div className={`${styles.header} ${styles.minTablet}`}>
          <h2 className={styles.title}>판매중인 상품</h2>
          <div className={styles.skillWrap}>
            <SearchInput keyword={keyword} setKeyword={setKeyword} />
            <button className={styles.btn}>상품 등록하기</button>
            <SortSelect orderBy={orderBy} setOrderBy={setOrderBy} />
          </div>
        </div>

        <div className={styles.mobile}>
          <div className={styles.header}>
            <div className={styles.row1}>
              <h2 className={styles.title}>판매중인 상품</h2>
              <button className={styles.btn}>상품 등록하기</button>
            </div>
            <div className={styles.row2}>
              <SearchInput keyword={keyword} setKeyword={setKeyword} />
              <SortSelect orderBy={orderBy} setOrderBy={setOrderBy} />
            </div>
          </div>
        </div>

        <div className={styles.listGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              price={product.price}
              favoriteCount={product.favoriteCount}
              image={product.images?.[0]}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductList;
