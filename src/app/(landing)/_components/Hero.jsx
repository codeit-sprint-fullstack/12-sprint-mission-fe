import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero({ type, children }) {
  const isBottom = type === "bottom";

  return (
    <section
      className={`
        min-h-[33.75rem] bg-hero-bg overflow-hidden
        md:overflow-visible
        ${isBottom ? "md:h-[57.9375rem]" : "md:h-[48.1875rem]"}
        lg:h-[33.75rem]
      `}
    >
      <div
        className="
          flex flex-col justify-end items-center
          w-full h-full max-w-[120rem] mx-auto
          md:overflow-visible
          lg:flex-row lg:justify-center lg:items-end
        "
      >
        <div
          className={`
            flex flex-col items-center
            lg:flex-row lg:items-center
            ${
              isBottom
                ? "gap-[8.19rem] pt-[7.56rem] md:gap-[13.56rem] lg:gap-[4.3125rem]"
                : "gap-[8.25rem] pt-[3rem] md:gap-[13.19rem] lg:gap-0"
            }
          `}
        >
          <div
            className="
              flex flex-col items-center
              w-[15rem]
              md:w-[32rem]
              lg:w-[22.3125rem] lg:mb-[3.75rem] lg:items-start
            "
          >
            <h2
              className="
                text-center text-3xl font-bold leading-[2.8rem] text-gray-700 break-keep
                md:text-[2.5rem] md:leading-[3.5rem]
                lg:text-left
              "
            >
              {children}
            </h2>
            {type === "top" && (
              <Button
                href="/items"
                size="xl"
                rounded="full"
                className="w-full mt-[1.12rem] md:mt-6 md:w-auto lg:mt-8"
              >
                구경하러 가기
              </Button>
            )}
          </div>

          <div className="relative w-fit min-w-[28rem] md:min-w-0">
            <Image
              src={
                isBottom
                  ? "/images/hero-img-bottom.svg"
                  : "/images/hero-img-top.svg"
              }
              alt=""
              aria-hidden="true"
              width={746}
              height={isBottom ? 397 : 340}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
