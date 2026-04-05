import React from "react";
import { Hero } from "./Hero/Hero";
import { Feature } from "./Feature/Feature";
import styles from "./Landing.module.css";

export const Landing = () => {
  return (
    <main>
      <Hero type="top" title="일상의 모든 물건을 거래해보세요" />

      <div className={styles.container}>
        <Feature
          badge="Hot item"
          title="인기 상품을 확인해보세요"
          description={
            <>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </>
          }
        />
        <Feature
          reverse
          badge="Search"
          title="구매를 원하는 상품을 검색하세요"
          description={
            <>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </>
          }
        />
        <Feature
          badge="Register"
          title="판매를 원하는 상품을 등록하세요"
          description={
            <>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </>
          }
        />
      </div>

      <Hero
        type="bottom"
        title={
          <>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </>
        }
      />
    </main>
  );
};
