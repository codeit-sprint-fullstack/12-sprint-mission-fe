import React from "react";
import styles from "./ProductCard.module.css";
import article from "../../assets/ProductCard/article.png";
import heart from "../../assets/ProductCard/ic_heart.png";

function ProductCard({ title, price, heartCount }) {
  return (
    <>
      <div className={styles.base}>
        <img className={styles.article} src={article} alt="article" />
        {/* <img className={styles.article} src={image} alt={title} /> */}
        <div className={styles.info}>
          <div className={styles.text}>
            <p className={styles.name}>{title}</p>
            <p className={styles.prise}>{price.toLocaleString()}원</p>
          </div>
          <div className={styles.heart}>
            <img className={styles.heartIc} src={heart} alt="heart" />
            <p className={styles.heartCount}>{heartCount}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
