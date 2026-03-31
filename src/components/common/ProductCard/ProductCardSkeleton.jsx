import React from "react";
import styles from "./ProductCardSkeleton.module.css";

export const ProductCardSkeleton = ({ type }) => {
  return (
    <li className={styles.card}>
      <div
        className={`${styles.thumbnail} ${styles[type]} ${styles.skeleton}`}
      ></div>

      <div className={styles.content}>
        <div className={`${styles.skeleton} ${styles.name}`} />
        <div className={`${styles.skeleton} ${styles.price}`} />
        <div className={styles.meta}>
          <div className={`${styles.skeleton} ${styles.heart}`} />
          <div className={`${styles.skeleton} ${styles.count}`} />
        </div>
      </div>
    </li>
  );
};
