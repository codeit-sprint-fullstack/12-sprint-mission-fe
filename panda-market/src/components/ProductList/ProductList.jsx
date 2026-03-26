import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";
import arrow from "../../assets/ProductList/ic_arrow_down.png";
import search from "../../assets/ProductList/ic_search.png";

function ProductList() {
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
