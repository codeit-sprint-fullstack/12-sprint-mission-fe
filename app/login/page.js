import Link from "next/link";

export const metadata = {
  title: "판다마켓 | 로그인",
};

export default function LoginPage() {
  return (
    <main className="login">
      <section className="login__container">
        <h1 className="login__logo">
          <Link href="/" className="login__logo-link">
            <img
              className="login__logo-image"
              src="/images/logo.png"
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
                <img
                  src="/images/btn_visibility_off_24px.svg"
                  alt="비밀번호 보기"
                />
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
              <img
                src="/images/login_img/ic_google_login.png"
                alt="구글 로그인"
              />
            </a>
            <a
              className="login__social-link"
              href="https://www.kakaocorp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/login_img/ic_kakao_login.png"
                alt="카카오 로그인"
              />
            </a>
          </div>
        </section>
        <p className="login__signup">
          판다마켓이 처음이신가요?
          <Link href="/auth" className="login__signup-link">
            회원가입
          </Link>
        </p>
      </section>
    </main>
  );
}
