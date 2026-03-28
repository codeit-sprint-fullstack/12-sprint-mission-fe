import styles from "./Footer.module.css";

const SNS_LINKS = [
  {
    href: "https://www.facebook.com/",
    icon: "/icons/ic_facebook.svg",
    label: "Facebook",
  },
  { href: "https://x.com/", icon: "/icons/ic_twitter.svg", label: "Twitter" },
  {
    href: "https://youtube.com/",
    icon: "/icons/ic_youtube.svg",
    label: "YouTube",
  },
  {
    href: "https://instagram.com/",
    icon: "/icons/ic_instagram.svg",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>©codeit - 2024</p>
        <div className={styles.links}>
          <a href="#">Privacy Policy</a>
          <a href="#">FAQ</a>
        </div>
        <div className={styles.socials}>
          {SNS_LINKS.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={styles.socialLink}
            >
              <img src={icon} alt={label} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
