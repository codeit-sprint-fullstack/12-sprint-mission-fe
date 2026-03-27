import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";
import arrow from "../../assets/ProductList/ic_arrow_down.png";
import search from "../../assets/ProductList/ic_search.png";

function ProductList({ products }) {
  return (
    <>
      <section className={styles.ProductList}>
        <div className={styles.titleWrap}>
          <div>
            <h2 className={styles.title}>판매중인 상품</h2>
          </div>
          <div className={styles.skillWrap}>
            <div className={styles.inputWrap}>
              <img className={styles.search} src={search} />
              <input
                className={styles.input}
                placeholder="검색할 상품을 입력해주세요"
              />
            </div>
            <button className={styles.btn}>상품 등록하기</button>
            {/* select 세부 목록 일단 킵 */}
            <div className={styles.selectWrap}>
              <select className={styles.select}>
                <option>최신순</option>
                <option>좋아요순</option>
              </select>
              <img className={styles.arrow} src={arrow} />
            </div>
          </div>
        </div>
        <div className={styles.listGrid}>
          {products.map((product) => (
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

export default ProductList;
