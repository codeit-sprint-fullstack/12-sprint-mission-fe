import React from "react";
import { Link } from "react-router-dom";
import "../style/reset.css";
import "../style/AuthPage.css";
import logoImage from "../assets/auth/logo.png";
import eyeOffIcon from "../assets/auth/btn_visibility_off_24px.svg";
import googleLoginImage from "../assets/auth/login_google.png";
import kakaoLoginImage from "../assets/auth/login_kakao.png";

const SignupPage = () => {
  return (
    <main className="auth-page">
      <div className="auth-page-inner">
        <Link to="/" className="auth-logo-link">
          <img src={logoImage} alt="판다마켓 로고" />
        </Link>

        <form className="auth-form">
          <div className="auth-field">
            <label className="auth-label" htmlFor="signup-email">
              이메일
            </label>
            <input
              id="signup-email"
              type="email"
              className="auth-input"
              placeholder="이메일을 입력해 주세요"
            />
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="signup-nickname">
              닉네임
            </label>
            <input
              id="signup-nickname"
              type="text"
              className="auth-input"
              placeholder="닉네임을 입력해 주세요"
            />
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="signup-password">
              비밀번호
            </label>
            <div className="auth-input-wrapper">
              <input
                id="signup-password"
                type="password"
                className="auth-input"
                placeholder="비밀번호를 입력해 주세요"
              />
              <img src={eyeOffIcon} className="auth-eye-icon" alt="" aria-hidden="true" />
            </div>
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="signup-password-confirm">
              비밀번호 확인
            </label>
            <div className="auth-input-wrapper">
              <input
                id="signup-password-confirm"
                type="password"
                className="auth-input"
                placeholder="비밀번호를 다시 한 번 입력해 주세요"
              />
              <img src={eyeOffIcon} className="auth-eye-icon" alt="" aria-hidden="true" />
            </div>
          </div>

          <button type="button" className="auth-submit-btn">
            회원가입
          </button>

          <section className="auth-social-box">
            <p className="auth-social-text">간편 로그인하기</p>
            <div className="auth-social-icons">
              <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                <img src={googleLoginImage} alt="구글 로그인" />
              </a>
              <a
                href="https://www.kakaocorp.com/page/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={kakaoLoginImage} alt="카카오 로그인" />
              </a>
            </div>
          </section>

          <div className="auth-footer">
            <span>이미 회원이신가요?</span>
            <Link to="/login" className="auth-footer-link">
              로그인
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignupPage;
