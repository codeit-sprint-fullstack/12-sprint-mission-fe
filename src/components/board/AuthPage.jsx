"use client";

import Link from "next/link";
import logoImage from "../../assets/auth/logo.png";
import eyeOffIcon from "../../assets/auth/btn_visibility_off_24px.svg";
import googleLoginImage from "../../assets/auth/login_google.png";
import kakaoLoginImage from "../../assets/auth/login_kakao.png";

export default function AuthPage({ mode }) {
  const isSignup = mode === "signup";

  return (
    <main className="auth-page">
      <div className="auth-page-inner">
        <Link href="/" className="auth-logo-link">
          <img src={logoImage.src} alt="판다마켓" />
        </Link>

        <form className="auth-form">
          <label className="auth-field">
            <span>이메일</span>
            <input type="email" placeholder="이메일을 입력해주세요" />
          </label>

          {isSignup ? (
            <label className="auth-field">
              <span>닉네임</span>
              <input type="text" placeholder="닉네임을 입력해주세요" />
            </label>
          ) : null}

          <label className="auth-field">
            <span>비밀번호</span>
            <div className="auth-input-wrapper">
              <input type="password" placeholder="비밀번호를 입력해주세요" />
              <img src={eyeOffIcon.src} alt="" aria-hidden="true" />
            </div>
          </label>

          {isSignup ? (
            <label className="auth-field">
              <span>비밀번호 확인</span>
              <div className="auth-input-wrapper">
                <input type="password" placeholder="비밀번호를 다시 한 번 입력해주세요" />
                <img src={eyeOffIcon.src} alt="" aria-hidden="true" />
              </div>
            </label>
          ) : null}

          <button type="button" className="auth-submit-btn">
            {isSignup ? "회원가입" : "로그인"}
          </button>

          <section className="auth-social-box">
            <p>간편 로그인하기</p>
            <div>
              <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                <img src={googleLoginImage.src} alt="구글 로그인" />
              </a>
              <a
                href="https://www.kakaocorp.com/page/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={kakaoLoginImage.src} alt="카카오 로그인" />
              </a>
            </div>
          </section>

          <div className="auth-switch">
            <span>{isSignup ? "이미 회원이신가요?" : "판다마켓이 처음이신가요?"}</span>
            <Link href={isSignup ? "/login" : "/signup"}>
              {isSignup ? "로그인" : "회원가입"}
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
