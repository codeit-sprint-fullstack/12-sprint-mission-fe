import Link from "next/link";

function Footer() {
  return (
    <footer className="!bg-[#111827]">
      <div className="!mx-auto !flex !w-full !max-w-[1200px] !flex-col !items-center !justify-between !gap-6 !px-6 !py-10 md:!flex-row">
        {/* left */}
        <p className="!text-sm !text-[#9CA3AF]">©codeit - 2026</p>

        {/* center */}
        <div className="!flex !items-center !gap-8">
          <Link
            href="/privacy"
            className="!text-sm !text-[#E5E7EB] hover:!text-white"
          >
            Privacy Policy
          </Link>

          <Link
            href="/faq"
            className="!text-sm !text-[#E5E7EB] hover:!text-white"
          >
            FAQ
          </Link>
        </div>

        {/* right */}
        <div className="!flex !items-center !gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img
              src="/images/social/ic_facebook.png"
              alt="facebook"
              className="!h-5 !w-5"
            />
          </a>

          <a href="https://x.com/home" target="_blank" rel="noreferrer">
            <img
              src="/images/social/ic_twitter.png"
              alt="twitter"
              className="!h-5 !w-5"
            />
          </a>

          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img
              src="/images/social/ic_youtube.png"
              alt="youtube"
              className="!h-5 !w-5"
            />
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img
              src="/images/social/ic_instagram.png"
              alt="instagram"
              className="!h-5 !w-5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
