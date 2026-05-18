import Link from "next/link";
import { BoardShell } from "./Layout";
import heroImage from "../../assets/mainPage/Img_home_top.png";
import sectionImage1 from "../../assets/mainPage/Img_home_01.png";
import sectionImage2 from "../../assets/mainPage/Img_home_02.png";
import sectionImage3 from "../../assets/mainPage/Img_home_03.png";
import bottomImage from "../../assets/mainPage/Img_home_bottom.png";

const sections = [
  {
    image: sectionImage1,
    eyebrow: "Hot item",
    title: "인기 상품을 확인해 보세요",
    body: "가장 HOT한 중고거래 물품을 판다마켓에서 확인할 수 있어요.",
  },
  {
    image: sectionImage2,
    eyebrow: "Search",
    title: "구매를 원하는 상품을 검색하세요",
    body: "구매하고 싶은 물품은 검색해서 쉽게 찾아보세요.",
  },
  {
    image: sectionImage3,
    eyebrow: "Register",
    title: "판매를 원하는 상품을 등록하세요",
    body: "어떤 물건이든 등록하고 이웃과 거래할 수 있어요.",
  },
];

export default function HomePage() {
  return (
    <BoardShell>
      <section className="home-hero">
        <div className="home-hero-copy">
          <h1>
            일상의 모든 물건을
            <br />
            거래해 보세요
          </h1>
          <Link href="/market" className="home-cta">
            구경하러 가기
          </Link>
        </div>
        <img src={heroImage.src} alt="판다마켓 거래" />
      </section>

      <section className="home-sections">
        {sections.map((section, index) => (
          <article className="home-feature" key={section.title}>
            <img src={section.image.src} alt="" />
            <div>
              <span>{section.eyebrow}</span>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="home-bottom">
        <div>
          <h2>
            믿을 수 있는
            <br />
            판다마켓 중고거래
          </h2>
        </div>
        <img src={bottomImage.src} alt="판다마켓 앱 화면" />
      </section>
    </BoardShell>
  );
}
