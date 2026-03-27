import React from "react";
import pandaFace from "../images/panda_face.png";
import pandaTitle from "../images/panda_title.png";

const Navigation = () => {
  return (
    <>
      <nav className="gnb">
        <div className="container">
          <div className="nav-left">
            <a href="./" className="logo">
              <img src={pandaFace} alt="logo image" className="logo-image" />
              <img src={pandaTitle} alt="logo text" className="logo-text" />
            </a>
            <div className="nav-options">
              <a className="option" src="" alt="자유게시판으로 이동">
                자유게시판
              </a>{" "}
              {/*a 태그에 src속성 추가 필요*/}
              <a className="option" src="" alt="중고마켓으로 이동">
                중고마켓
              </a>
            </div>
          </div>

          <a href="./html/login.html" className="login-button">
            {" "}
            <div>로그인</div>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
