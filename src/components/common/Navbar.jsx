import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          <img
            src="/icons/panda-logo.svg"
            alt="판다마켓 로고"
            width={40}
            height={41}
          />
          <span className={styles.logoText}>판다마켓</span>
        </a>
        <nav className={styles.nav}>
          <a href="/community" className={styles.navLink}>
            자유게시판
          </a>
          <a href="/" className={styles.navLink}>
            중고마켓
          </a>
        </nav>
        <a href="/login" className={styles.loginBtn}>
          로그인
        </a>
      </div>
    </header>
  );
}
