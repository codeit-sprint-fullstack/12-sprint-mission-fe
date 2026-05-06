import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import medalIcon from "./ic-medal.svg";

export default function BestPostCard({ post }) {
  const imageSrc = post?.imageUrl || "/images/post-default-image.png";

  return (
    <Link href="" className="flex-1 min-w-0">
      <div
        className="flex flex-col items-start gap-4 h-full px-6 pb-4 rounded-lg bg-gray-50
                  xl:h-[10.5625rem] xl:pb-2 xl:gap-[0.625rem]"
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
        <div className="flex w-full justify-between gap-2">
          <h3 className="text-xl-semibold text-gray-800">{post.title}</h3>
          <div
            className="
                flex justify-center items-center w-[4.5rem] h-[4.5rem] p-[0.857rem_0.75rem] rounded-lg border-gray-200 bg-white 
                md:rounded-md md:border md:flex-shrink-0"
          >
            <Image src={imageSrc} width={40} height={45} alt="게시글 이미지" />
          </div>
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
          <span className="text-gray-400">
            {format(new Date(post.createdAt), "yyyy. MM. dd")}
          </span>
        </div>
      </div>
    </Link>
  );
}
