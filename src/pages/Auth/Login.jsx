import { Link } from "react-router-dom";

import "./auth.css";
import logo from "../../assets/images/logo/logo.png";
import eye from "../../assets/images/icons/eye.svg";
import eyeOff from "../../assets/images/icons/eye-off.svg";
import google from "../../assets/images/social/google.svg";
import kakao from "../../assets/images/social/kakao.svg";

function Login() {
  return (
    <div className="page">
      <main className="container">
        <header>
          <Link to="/">
            <img className="logo" src={logo} alt="판다마켓 로고" />
          </Link>
        </header>

        <form className="form">
          <div className="field">
            <label className="label" htmlFor="email">
              이메일
            </label>
            <input
              id="email"
              className="input"
              type="email"
              placeholder="이메일을 입력해 주세요"
            />
          </div>

          <div className="field">
            <label className="label">비밀번호</label>

            <div className="pw">
              <input className="pw__toggle" type="checkbox" id="loginPw" />

              <input
                className="input pw__input"
                type="password"
                placeholder="비밀번호를 입력해 주세요"
              />

              <label className="pw__eye" htmlFor="loginPw">
                <img className="eye-open" src={eye} alt="보기" />
                <img className="eye-close" src={eyeOff} alt="숨기기" />
              </label>
            </div>
          </div>

          <button type="submit" className="login-btn">
            로그인
          </button>
        </form>

        <section className="social-box">
          <span>간편 로그인하기</span>

          <div className="social-icons">
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <img src={google} alt="google" />
            </a>

            <a
              href="https://www.kakaocorp.com/page/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={kakao} alt="kakao" />
            </a>
          </div>
        </section>

        <p className="bottom-text">
          판다마켓이 처음이신가요? <Link to="/signup">회원가입</Link>
        </p>
      </main>
    </div>
  );
}

export default Login;
