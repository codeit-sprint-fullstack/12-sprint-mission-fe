"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="page">
      <main className="container" aria-label="회원가입">
        <header>
          <Link href="/" aria-label="판다마켓 홈으로 이동">
            <img
              className="logo"
              src="/images/logo/logo.png"
              alt="판다마켓 로고"
            />
          </Link>
        </header>

        <form className="form">
          <div className="field">
            <label className="label" htmlFor="email">
              이메일
            </label>
            <input
              className="input"
              id="email"
              type="email"
              placeholder="이메일을 입력해 주세요"
              required
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="nickname">
              닉네임
            </label>
            <input
              className="input"
              id="nickname"
              type="text"
              placeholder="닉네임을 입력해 주세요"
              required
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="password">
              비밀번호
            </label>

            <div className="pw">
              <input className="pw__toggle" type="checkbox" id="pwToggle1" />

              <input
                className="input pw__input"
                id="password"
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                required
              />

              <label className="pw__eye" htmlFor="pwToggle1">
                <img className="eye-open" src="/images/icons/eye.svg" alt="" />
                <img
                  className="eye-close"
                  src="/images/icons/eye-off.svg"
                  alt=""
                />
              </label>
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="passwordConfirm">
              비밀번호 확인
            </label>

            <div className="pw">
              <input className="pw__toggle" type="checkbox" id="pwToggle2" />

              <input
                className="input pw__input"
                id="passwordConfirm"
                type="password"
                placeholder="비밀번호를 다시 한 번 입력해 주세요"
                required
              />

              <label className="pw__eye" htmlFor="pwToggle2">
                <img className="eye-open" src="/images/icons/eye.svg" alt="" />
                <img
                  className="eye-close"
                  src="/images/icons/eye-off.svg"
                  alt=""
                />
              </label>
            </div>
          </div>

          <button className="login-btn" type="submit">
            회원가입
          </button>
        </form>

        <section className="social-box" aria-label="간편 로그인하기">
          <span>간편 로그인하기</span>

          <div className="social-icons">
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <img src="/images/social/google.svg" alt="구글" />
            </a>

            <a
              href="https://www.kakaocorp.com/page/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/social/kakao.svg" alt="카카오" />
            </a>
          </div>
        </section>

        <p className="bottom-text">
          이미 회원이신가요? <Link href="/login">로그인</Link>
        </p>
      </main>
    </div>
  );
}
