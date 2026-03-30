import React from "react";
import { Link } from "react-router-dom";
import featureImg1 from "../assets/feature1-image.png";
import featureImg2 from "../assets/feature2-image.png";
import featureImg3 from "../assets/feature3-image.png";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <main className="with-header">
      <section className={`${styles.banner} ${styles.hero}`}>
        <div className={styles.wrapper}>
          <h1>
            일상의 모든 물건을
            <br />
            거래해 보세요
          </h1>
          <Link to="/items" className={`${styles.button} ${styles.pillButton}`}>
            구경하러 가기
          </Link>
        </div>
      </section>

      <section className={`${styles.wrapper} ${styles.features}`}>
        <div className={styles.feature}>
          <img src={featureImg1} alt="인기 상품" />
          <div className={styles.featureContent}>
            <h2>Hot item</h2>
            <h1>
              인기 상품을{" "}
              <span className={styles.breakOnDesktop}>
                <br />
              </span>
              확인해 보세요
            </h1>
            <p className={styles.featureDescription}>
              가장 HOT한 중고거래 물품을
              <br />
              판다마켓에서 확인해 보세요
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <img src={featureImg2} alt="검색 기능" />
          <div className={styles.featureContent}>
            <h2>Search</h2>
            <h1>
              구매를 원하는{" "}
              <span className={styles.breakOnDesktop}>
                <br />
              </span>
              상품을 검색하세요
            </h1>
            <p className={styles.featureDescription}>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <img src={featureImg3} alt="판매 상품 등록" />
          <div className={styles.featureContent}>
            <h2>Register</h2>
            <h1>
              판매를 원하는{" "}
              <span className={styles.breakOnDesktop}>
                <br />
              </span>
              상품을 등록하세요
            </h1>
            <p className={styles.featureDescription}>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.banner} ${styles.bottomBanner}`}>
        <div className={styles.wrapper}>
          <h1>
            믿을 수 있는
            <br />
            판다마켓 중고거래
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Home;
