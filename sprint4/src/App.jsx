import React from "react";

import "./App.css"; // 보내주신 CSS를 App.css에 붙여넣으세요

const App = () => {
  return (
    <div className="App">
      {/* --- 네비게이션 바 (GNB) --- */}

      <nav className="head1">
        <div className="navbar">
          <div className="nav-left">
            <a href="/" className="logo">
              <img src="image/panda_icon.png" alt="로고" />
            </a>

            {/* 메뉴 두 개를 여기에 나란히 넣습니다 */}

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

      {/* --- 메인 콘텐츠 (여기에 상품 목록이 들어갑니다) --- */}

      <main style={{ marginTop: "70px" }}>
        {/* head1이 fixed이므로 상단 여백을 살짝 줬어요 */}

        <section className="product-section">
          {/* 여기에 아까 알려드린 fetch 상품 목록 코드를 넣으세요 */}

          <h2 style={{ textAlign: "center", padding: "50px" }}>
            상품 목록이 들어갈 자리
          </h2>
        </section>
      </main>

      {/* --- 푸터 (Footer) --- */}

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
