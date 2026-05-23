import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Hero/Hero";
import Section from "@/components/Section/Section";
import Rectangle from "@/components/Rectangle/Rectangle";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <Hero />

        <Section
          type="hot-item"
          title="Hot item"
          heading={`인기 상품을\n확인해 보세요`}
          desc={`가장 HOT한 중고거래 물품을\n판다 마켓에서 확인해 보세요`}
          image="/images/home/home_01.png"
        />

        <Section
          type="search"
          title="Search"
          heading={`구매를 원하는\n상품을 검색하세요`}
          desc={`구매하고 싶은 물품은 검색해서\n쉽게 찾아보세요`}
          image="/images/home/home_02.png"
        />

        <Section
          type="register"
          title="Register"
          heading={`판매를 원하는\n상품을 등록하세요`}
          desc={`어떤 물건이든 판매하고 싶은 상품을\n쉽게 등록하세요`}
          image="/images/home/home_03.png"
        />

        <Rectangle />
      </main>

      <Footer />
    </div>
  );
}
