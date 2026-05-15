import Link from "next/link";

export const metadata = {
  title: "판다마켓 | 회원가입",
};

export default function AuthPage() {
  return (
    <main className="auth">
      <section className="auth__container">
        <h1 className="auth__logo">
          <Link href="/" className="auth__logo-link">
            <img
              className="auth__logo-image"
              src="/images/logo.png"
              alt="판다마켓"
            />
          </Link>
        </h1>
        <form className="auth__form">
          <div className="auth__field">
            <label className="auth__label" htmlFor="email">
              이메일
            </label>
            <input
              className="auth__input"
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력해주세요"
            />
          </div>
          <div className="auth__field">
            <label className="auth__label" htmlFor="nickname">
              닉네임
            </label>
            <input
              className="auth__input"
              id="nickname"
              name="nickname"
              type="text"
              placeholder="닉네임을 입력해주세요"
            />
          </div>
          <div className="auth__field">
            <label className="auth__label" htmlFor="password">
              비밀번호
            </label>
            <div className="auth__input-wrap auth__input-wrap--password">
              <input
                className="auth__input"
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
              <button
                className="auth__toggle"
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
          <div className="auth__field">
            <label className="auth__label" htmlFor="password_check">
              비밀번호 확인
            </label>
            <div className="auth__input-wrap auth__input-wrap--password">
              <input
                className="auth__input"
                id="password_check"
                name="password_check"
                type="password"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
              />
              <button
                className="auth__toggle"
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
          <button className="auth__submit" type="submit">
            회원가입
          </button>
        </form>
        <section className="auth__social" aria-label="간편 로그인">
          <p className="auth__social-text">간편 로그인하기</p>
          <div className="auth__social-icons">
            <a
              className="auth__social-link"
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
              className="auth__social-link"
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
        <p className="auth__switch">
          이미 회원이신가요?
          <Link href="/login" className="auth__switch-link">
            로그인
          </Link>
        </p>
      </section>
    </main>
  );
}
