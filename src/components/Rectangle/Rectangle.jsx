import React from "react";
import "./Rectangle.css";
import bottomImg from "../../assets/images/home/home_bottom.png";

function Rectangle() {
  return (
    <section className="rectangle">
      <div className="inner">
        <div className="rectangle-text">
          <h1>
            믿고 맡길 수 있는 <br />
            판다마켓 중고 거래
          </h1>
        </div>

        <div className="rectangle-visual">
          <img src={bottomImg} alt="판다 하단 이미지" />
        </div>
      </div>
    </section>
  );
}

export default Rectangle;
