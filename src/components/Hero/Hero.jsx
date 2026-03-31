import { Link } from "react-router-dom";
import heroImg from "../../assets/images/home/home_top.png";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="inner">
        <div className="hero-text">
          <h1>
            일상의 모든 물건을 <br />
            거래해 보세요
          </h1>

          <Link to="/items" className="hero-btn">
            구경하러 가기
          </Link>
        </div>

        <div className="hero-visual">
          <img src={heroImg} alt="판다 캐릭터" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
