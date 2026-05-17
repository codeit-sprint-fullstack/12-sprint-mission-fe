import Link from "next/link";

function Hero() {
  return (
    <section className="hero">
      <div className="inner">
        <div className="hero-text">
          <h1>
            일상의 모든 물건을
            <br />
            거래해 보세요
          </h1>

          <Link href="/items" className="hero-btn">
            구경하러 가기
          </Link>
        </div>

        <img
          src="/images/home/home_top.png"
          alt="판다마켓"
          className="hero-visual"
        />
      </div>
    </section>
  );
}

export default Hero;
