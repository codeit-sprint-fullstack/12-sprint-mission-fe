import React from "react";
import styles from "./PageNation.module.css";

export const PageNation = () => {
  return (
    <div className={styles.pageNation}>
      <button
        className={`${styles.circle} ${styles.pageBtn} ${styles.prev}`}
        href="#"
        disabled
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M9.5 4.6665L6 8.1665L9.5 11.6665"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <a className={`${styles.circle} ${styles.link}`} href="#">
        1
      </a>
      <a className={`${styles.circle} ${styles.link}`} href="#">
        2
      </a>
      <a className={`${styles.circle} ${styles.link}`} href="#">
        3
      </a>
      <a className={`${styles.circle} ${styles.link}`} href="#">
        4
      </a>
      <a className={`${styles.circle} ${styles.link}`} href="#">
        5
      </a>

      <button
        className={`${styles.circle} ${styles.pageBtn} ${styles.next}`}
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6 4.6665L9.5 8.1665L6 11.6665"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
