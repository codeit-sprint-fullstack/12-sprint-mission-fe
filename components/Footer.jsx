import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copyright">©codeit - 2024</p>
        <div className="footer__links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className="footer__sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/footer_img/ic_facebook.png"
              alt="페이스북 아이콘"
            />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/footer_img/ic_twitter.png" alt="엑스 아이콘" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/footer_img/ic_youtube.png" alt="유튜브 아이콘" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/footer_img/ic_instagram.png"
              alt="인스타그램 아이콘"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
