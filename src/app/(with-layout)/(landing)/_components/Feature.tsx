import Image from "next/image";
import type { ReactNode } from "react";

type FeatureBadge = "Hot item" | "Search" | "Register";

type FeatureProps = {
  badge: FeatureBadge;
  title: string;
  description: ReactNode;
  reverse?: boolean;
};

const featureImages: Record<FeatureBadge, string> = {
  "Hot item": "/images/hot-item-img.svg",
  Search: "/images/search-img.svg",
  Register: "/images/register-img.svg",
};

export function Feature({
  badge,
  title,
  description,
  reverse = false,
}: FeatureProps) {
  return (
    <section className="py-0 px-0 lg:py-[8.625rem]">
      <div
        className={`
          mx-auto w-full max-w-[61.75rem] bg-surface 
          flex flex-col items-start gap-6
          lg:flex-row lg:items-center lg:justify-center lg:gap-16
          ${reverse ? "items-end lg:flex-row-reverse" : "items-start"}
        `}
      >
        {/* 이미지 */}
        <Image
          src={featureImages[badge]}
          alt=""
          width={588}
          height={444}
          className="w-full object-contain lg:w-[588px]"
        />

        {/* 텍스트 */}
        <div
          className={`
            flex flex-col justify-center w-full lg:w-[20.9375rem]
            ${reverse ? "text-right" : "text-left"}
          `}
        >
          <strong className="mb-2 md:mb-4 lg:mb-[0.75rem] text-lg md:text-2lg font-bold text-primary">
            {badge}
          </strong>

          <h3
            className="
              mb-4 text-2xl font-bold leading-xl text-gray-700 break-keep
              md:mb-6 md:text-3xl md:leading-3xl 
              lg:text-[2.5rem] lg:leading-[3.5rem]
            "
          >
            {title}
          </h3>

          <p
            className="
              text-575rem] text-gray-700
              md:text-2lg font-medium 
              lg:text-2xl font-medium 
            "
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
