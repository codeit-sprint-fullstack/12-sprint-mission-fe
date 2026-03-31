import React from "react";
import "../style/index.css";
import Section from "../components/Home/Section";
// 한파일에 작성한다
// 컴포넌트 분리가 필요한 중복되는 곳을 찾는다
// state는 사용자가 바꾸거나, 리렌더링이 필요한 것으로 설정한다
const MainPage = () => {
  return (
    <div>
      <section className="hero-bg">
        <div className="hero container">
          <div className="hero-inner">
            <h2>
              일상의 모든 물건을 <br />
              거래해 보세요
            </h2>
            <a href="/sprintMission1/src/items/items.html" className="hero-btn">
              구경하러 가기
            </a>
          </div>
          <div>
            <img
              src="/sprintMission1/resource/main/Img_home_top.png"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* 중간 섹션 컴포넌트 분리 */}
      <Section />

      <section className="bottom-bg">
        <section className="bottom container">
          <div className="bottom-inner">
            <div className="bottom-text">
              <h2>
                믿을 수 있는 <br />
                판다마켓 중고 거래
              </h2>
            </div>
            <div>
              <img
                src="/sprintMission1/resource/main/Img_home_bottom.png"
                className="bottom-img"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default MainPage;
