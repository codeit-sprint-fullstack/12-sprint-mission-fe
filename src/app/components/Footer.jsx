import Image from "next/image";
import React from "react";

import icFacebook from "../../../public/icons/ic_facebook.svg";
import icInstagram from "../../../public/icons/ic_instagram.svg";
import icTwitter from "../../../public/icons/ic_twitter.svg";
import icYoutube from "../../../public/icons/ic_youtube.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full min-h-[160px] h-full px-[16px] py-[32px] bg-(--Secondary-900) text-lg md:px-[24px] xl:px-[400px]">
      <div className="flex justify-between items-start">
        <div className="text-(--Secondary-400) hidden md:block">
          <p>©codeit - 2024</p>
        </div>
        <div className="flex gap-[30px] text-(--Secondary-200) hidden md:block">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className="block flex flex-col gap-[24px] md:hidden">
          <div className="flex gap-[30px] text-(--Secondary-200)">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div className="text-(--Secondary-400) block md:hidden">
            <p>©codeit - 2024</p>
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src={icFacebook}
              alt="페이스북 아이콘"
              width={18}
              height={18}
            />
          </Link>
          <Link
            href="https://www.x.com/ "
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={icTwitter} alt="X 아이콘" width={18} height={18} />
          </Link>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={icYoutube} alt="유튜브 아이콘" width={18} height={18} />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src={icInstagram}
              alt="인스타그램 아이콘"
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
