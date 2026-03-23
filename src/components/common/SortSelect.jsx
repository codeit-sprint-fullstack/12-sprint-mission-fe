import React from "react";
import arrowIcon from "./ic-arrow.svg";
import styles from "./SortSelect.module.css";

export const SortSelect = () => {
  return (
    <div className={styles.wrapper}>
      <select className={styles.select}>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>

      <img src={arrowIcon} className={styles.arrow} alt="" />
    </div>
  );
};
