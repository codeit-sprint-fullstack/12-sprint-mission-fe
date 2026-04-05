import { Link } from "react-router-dom";
import footerStyles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={`inner ${footerStyles.inner}`}>
        <p className={footerStyles.copyright}>&copy;codeit - 2026</p>

        <ul className={footerStyles.csMenu}>
          <li>
            <Link to={`/privacy`}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={`/faq`}>FAQ</Link>
          </li>
        </ul>

        <ul className={footerStyles.snsList}>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              title="페이스북 바로가기(새창)"
              className={footerStyles.facebook}
            >
              <span className="sr-only">페이스북</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.x.com"
              target="_blank"
              title="트위터 바로가기(새창)"
              className={footerStyles.twitter}
            >
              <span className="sr-only">트위터</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              title="유튜브 바로가기(새창)"
              className={footerStyles.youtube}
            >
              <span className="sr-only">유튜브</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              title="인스타그램 바로가기(새창)"
              className={footerStyles.instagram}
            >
              <span className="sr-only">인스타그램</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
