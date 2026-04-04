import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout";
import ItemsPage from "./pages/ItemsPage";
import RegistrationPage from "./pages/RegistrationPage";
import "./App.css";

const LandingPage = () => {
  return (
    <main>
      {/* HERO 상단 */}
      <div className="hero">
        <div className="ractangle">
          <span className="ractangle-left">
            <p className="hero-text">
              일상의 모든 물건을
              <br />
              거래해 보세요
            </p>
            <Link to="/items" className="hero-button">
              구경하러 가기
            </Link>
          </span>
          <span className="ractangle-right">
            <img src="/images/히어로그림.png" alt="hero Image1" />
          </span>
        </div>
      </div>

      {/* SECTION 1: 인기 상품 */}
      <div className="main-section">
        <div className="section">
          <img
            src="/images/문단1그림.png"
            alt="section"
            width="588"
            height="444"
          />
          <span className="section-text1">
            <p className="bluetag">hot item</p>
            <p className="title">
              인기 상품을
              <br />
              확인해 보세요
            </p>
            <p className="text">
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </span>
        </div>
      </div>

      {/* SECTION 2: 검색 (텍스트 우측 정렬) */}
      <div className="main-section">
        <div className="section">
          <span className="section-text2">
            <p className="bluetag">Search</p>
            <p className="title">
              구매를 원하는
              <br />
              상품을 검색하세요
            </p>
            <p className="text">
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </span>
          <img
            src="/images/문단2그림.png"
            alt="section"
            width="588"
            height="444"
          />
        </div>
      </div>

      {/* SECTION 3: 등록 */}
      <div className="main-section">
        <div className="section">
          <img
            src="/images/문단3그림.png"
            alt="section"
            width="588"
            height="444"
          />
          <span className="section-text1">
            <p className="bluetag">Register</p>
            <p className="title">
              판매를 원하는
              <br />
              상품을 등록하세요
            </p>
            <p className="text">
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </span>
        </div>
      </div>

      {/* HERO 하단 */}
      <div className="hero">
        <div className="ractangle">
          <span className="ractangle-left">
            <p className="hero-text">
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </p>
          </span>
          <span className="ractangle-right">
            <img src="/images/하단1그림.png" alt="hero Image2" />
          </span>
        </div>
      </div>
    </main>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
