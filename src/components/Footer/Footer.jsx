import { Link } from "react-router-dom";
import facebook from "../../assets/footer/ic_facebook.png";
import twitter from "../../assets/footer/ic_twitter.png";
import youtube from "../../assets/footer/ic_youtube.png";
import instagram from "../../assets/footer/ic_instagram.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copyright">©codeit - 2026</p>

        <div className="footer-center">
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/faq" className="footer-link">
            FAQ
          </Link>
        </div>

        <div className="footer-right">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>

          <a
            href="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
