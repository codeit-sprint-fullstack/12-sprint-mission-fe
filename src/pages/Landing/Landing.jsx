import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Rectangle from "../../components/Rectangle/Rectangle";
import Footer from "../../components/Footer/Footer";

import img1 from "../../assets/images/home/home_01.png";
import img2 from "../../assets/images/home/home_02.png";
import img3 from "../../assets/images/home/home_03.png";

function Landing() {
  return (
    <>
      <Header />
      <Hero />

      <Section
        type="hot-item"
        title="Hot Item"
        heading={`인기 상품을 \n 확인해 보세요`}
        desc={`가장 HOT한 중고거래 물품을 \n 판다 마켓에서 확인해 보세요`}
        image={img1}
      />

      <Section
        type="search"
        title="Search"
        heading={`구매를 원하는 \n 상품을 검색하세요`}
        desc={`구매하고 싶은 물품을 검색해서 \n 쉽게 찾아보세요`}
        image={img2}
      />

      <Section
        type="register"
        title="Register"
        heading={`판매를 원하는 \n 상품을 등록하세요`}
        desc={`어떤 물건이든 판매하고 싶은 상품을 \n 쉽게 등록하세요`}
        image={img3}
      />

      <Rectangle />

      <Footer />
    </>
  );
}

export default Landing;
