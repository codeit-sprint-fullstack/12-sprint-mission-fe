import React from "react";
import "./css/loginpage.css";
import * as imgAssets from "./imgs/imgController.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    document.title = "판다마켓 | 로그인";
  }, []);
  return (
    <main className="login">
      <section className="login__container">
        <h1 className="login__logo">
          <Link to="/" className="login__logo-link">
            <img
              className="login__logo-image"
              src={imgAssets.pandaLogo}
              alt="판다마켓"
            />
          </Link>
        </h1>

        <form className="login__form">
          <div className="login__field">
            <label className="login__label" htmlFor="email">
              이메일
            </label>
            <input
              className="login__input"
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력해주세요"
              autoComplete="email"
            />
          </div>

          <div className="login__field">
            <label className="login__label" htmlFor="password">
              비밀번호
            </label>
            <div className="login__input-wrap login__input-wrap--password">
              <input
                className="login__input"
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                autoComplete="current-password"
              />
              <button
                className="login__toggle"
                type="button"
                aria-label="비밀번호 보기"
              >
                <img src={imgAssets.ic_eyes} />
              </button>
            </div>
          </div>

          <button className="login__submit" type="submit">
            로그인
          </button>
        </form>

        <section className="login__social" aria-label="간편 로그인">
          <p className="login__social-text">간편 로그인하기</p>
          <div className="login__social-icons">
            <a
              className="login__social-link"
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgAssets.ic_google} alt="구글 로그인" />
            </a>
            <a
              className="login__social-link"
              href="https://www.kakaocorp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgAssets.ic_kakao} alt="카카오 로그인" />
            </a>
          </div>
        </section>

        <p className="login__signup">
          판다마켓이 처음이신가요?
          <Link to="/auth" className="login__signup-link">
            회원가입
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
