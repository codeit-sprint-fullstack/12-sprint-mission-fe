import React from "react";
import styles from "./Feature.module.css";
import hotItemImg from "./hot-item-img.svg";
import searchImg from "./search-img.svg";
import registerImg from "./register-img.svg";

const featureImages = {
  "Hot item": hotItemImg,
  Search: searchImg,
  Register: registerImg,
};

export const Feature = ({ badge, title, description, reverse = false }) => {
  return (
    <section className={styles.feature}>
      <div
        className={`${styles.container} ${styles.featureInner} ${reverse ? styles.reverse : ""}`}
      >
        <img
          className={styles.img}
          src={featureImages[badge]}
          alt=""
          aria-hidden="true"
        />
        <div className={styles.featureContent}>
          <strong className={`text-2lg-bold ${styles.featureBadge}`}>
            {badge}
          </strong>
          <h3 className={`${styles.title} ${styles.featureTitle}`}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </section>
  );
};
