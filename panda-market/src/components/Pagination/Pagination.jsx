import React from "react";
import styles from "./Pagination.module.css";

function Pagination() {
  return (
    <>
      <div className={styles.btnWrap}>
        <button className={styles.btn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M9.5 4.66669L6 8.16669L9.5 11.6667"
              stroke="#4B5563"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className={`${styles.btn} ${styles.btnPage}`}>1</button>
        <button className={styles.btn}>2</button>
        <button className={styles.btn}>3</button>
        <button className={styles.btn}>4</button>
        <button className={styles.btn}>5</button>
        <button className={styles.btn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 4.66656L9.5 8.16656L6 11.6666"
              stroke="#4B5563"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Pagination;
