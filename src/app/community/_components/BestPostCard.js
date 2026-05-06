import Link from "next/link";
import Image from "next/image";
import medalIcon from "./ic-medal.svg";

export default function BestPostCard({ post }) {
  const hasImage = post?.imageUrl;

  return (
    <Link href="">
      <div
        className="flex flex-col items-start gap-4 self-stretch px-6 pb-4 rounded-lg bg-gray-50
                    md:w-[21.25rem] md:self-auto
                    xl:w-[24rem] xl:h-[10.5625rem] xl:pb-0 xl:gap-[0.625rem]"
      >
        <div className="flex justify-center items-center gap-1 w-[6.375rem] py-0.5 px-6 rounded-b-2xl bg-primary">
          <Image
            src={medalIcon}
            width={16}
            height={16}
            alt=""
            aria-hidden="true"
          />
          <span className="text-lg-semibold text-white">Best</span>
        </div>
        <div className="flex gap-2">
          <h3 className="text-xl-semibold text-gray-800">
            맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
          </h3>
          {hasImage && (
            <div className="flex justify-center items-center w-[4.5rem] h-[4.5rem] p-[0.857rem_0.75rem] rounded-lg border-gray-200 bg-white md:rounded-md md:border md:flex-shrink-0">
              <Image
                src={post.imageUrl}
                width={40}
                height={45}
                alt="게시글 이미지"
              />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center w-full text-md-regular mt-6 xl:mt-0">
          <div className="flex gap-2">
            <span className="text-gray-600">닉네임</span>
            <div className="flex items-center gap-1 text-gray-500">
              <Image
                src="./icons/ic-heart.svg"
                width={16}
                height={16}
                alt=""
                aria-hidden="true"
              />
              <span>9999+</span>
            </div>
          </div>
          <span className="text-gray-400">2024. 04. 16</span>
        </div>
      </div>
    </Link>
  );
}
