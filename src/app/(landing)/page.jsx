import Hero from "./_components/Hero";
import Feature from "./_components/Feature";

export default function Landing() {
  return (
    <>
      <Hero type="top">일상의 모든 물건을 거래해보세요</Hero>

      <div className="flex flex-col gap-10 px-4 pt-[3.25rem] pb-[5.19rem] md:gap-[3.25rem] md:pt-6 md:pb-14 md:px-6 lg:pt-0 lg:pb-[8.625rem]lg:gap-0">
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

      <Hero type="bottom">
        믿을 수 있는
        <br />
        판다마켓 중고 거래
      </Hero>
    </>
  );
}
