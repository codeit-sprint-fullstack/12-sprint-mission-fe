import React from "react";
import styles from "./ProductCard.module.css";
import heart from "../../assets/ProductCard/ic_heart.png";

function ProductCard({ title, price, favoriteCount, image }) {
  return (
    <>
      <div className={styles.base}>
        <div className={styles.imageBox}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.info}>
          <div className={styles.text}>
            <p className={styles.name}>{title}</p>
            <p className={styles.price}>{price.toLocaleString()}원</p>
          </div>
          <div className={styles.heart}>
            <img className={styles.heartIc} src={heart} alt="heart" />
            <p className={styles.favoriteCount}>{favoriteCount}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
