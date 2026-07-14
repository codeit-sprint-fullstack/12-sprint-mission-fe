import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="h-[10rem] bg-gray-900">
      <div className="flex justify-between items-start w-full max-w-[120rem] h-full mx-auto py-8 px-[1rem] md:px-[1.5rem] xl:px-[12.5rem] flex-wrap md:flex-nowrap">
        <span className="text-gray-400 text-lg leading-none order-1 md:order-none w-full md:w-auto mt-6 md:mt-0 text-left md:text-center">
          ©codeit - 2024
        </span>

        <nav>
          <ul className="flex gap-[1.875rem] text-lg leading-none">
            <li>
              <Link href="/privacy" className="text-gray-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-200">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-[0.75rem]">
          <a
            href="https://www.facebook.com/?locale=ko_KR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">페이스북</span>
            <Image
              src="/icons/ic-facebook.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
            />
          </a>
          <a
            href="https://x.com/?lang=ko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">트위터</span>
            <Image
              src="/icons/ic-twitter.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
            />
          </a>
          <a
            href="https://www.youtube.com/?hl=ko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">유튜브</span>
            <Image
              src="/icons/ic-youtube.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">인스타그램</span>
            <Image
              src="/icons/ic-instagram.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
