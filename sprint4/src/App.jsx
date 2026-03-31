import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <nav className="head1">
        <div className="navbar">
          <div className="nav-left">
            <a href="/" className="logo">
              <img src="image/panda_icon.png" alt="로고" />
            </a>
            <div className="nav-menu">
              <a href="#" className="menu-item">
                자유게시판
              </a>
              <a href="/" className="menu-item active">
                중고마켓
              </a>
            </div>
          </div>
          <div>
            <a href="./login.html" className="login_btn">
              로그인
            </a>
          </div>
        </div>
      </nav>

      <main style={{ marginTop: "70px" }}>
        <section className="product-section">
          <h2 style={{ textAlign: "center", padding: "50px" }}>
            상품 목록이 들어갈 자리
          </h2>
        </section>
      </main>

      <footer>
        <div className="foot2">
          <div className="foot_banner1">@codeit-2024</div>
          <div className="middle_foot">
            <a href="./privacy.html">
              <div className="foot_banner2">Privacy Policy</div>
            </a>
            <a href="./faq.html">
              <div className="foot_banner2">FAQ</div>
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./image/facebook.png" alt="페이스북" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer">
              <img src="./image/Vector.png" alt="X" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img src="./image/youtube.png" alt="유튜브" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./image/instagram.png" alt="인스타그램" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
