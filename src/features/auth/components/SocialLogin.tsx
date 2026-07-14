import Image from "next/image";

export function SocialLogin() {
  return (
    <section
      aria-labelledby="social-login"
      className="flex justify-between items-center w-full h-[4.625rem] mb-6 py-4 px-[1.4375rem] rounded-lg bg-surface-accent"
    >
      <h3 id="social-login" className="text-lg font-medium">
        간편 로그인하기
      </h3>

      <ul className="flex gap-4">
        <li>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">구글 로그인</span>
            <Image
              src="/icons/ic-google.svg"
              alt=""
              width={42}
              height={42}
              aria-hidden="true"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.kakaocorp.com/page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">카카오 로그인</span>
            <Image
              src="/icons/ic-kakao.svg"
              alt=""
              width={42}
              height={42}
              aria-hidden="true"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
