import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import heroTop from "./hero-img-top.svg";
import heroBottom from "./hero-img-bottom.svg";

const heroImages = {
  top: heroTop,
  bottom: heroBottom,
};

export const Hero = ({ type, title }) => {
  return (
    <section className={`${styles.hero} ${styles[type]}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.inner} ${styles[type]}`}>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            {type === "top" && (
              <Link to="/items" className={`btn-base ${styles.ctaBtn}`}>
                구경하러 가기
              </Link>
            )}
          </div>
          <img
            src={heroImages[type]}
            className={styles.img}
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};
