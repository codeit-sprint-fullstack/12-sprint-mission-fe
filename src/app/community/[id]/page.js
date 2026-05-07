import Image from "next/image";
import { format } from "date-fns";
import { getArticle } from "@/lib/api/posts";
import Button from "@/components/ui/Button";
import CommentForm from "./_components/CommentForm";
import CommentList from "./_components/CommentList";
import PostKebabMenu from "./_components/PostKebabMenu";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const { data: post } = await getArticle(id);

  return {
    title: post.title,
  };
}

export default async function PostDetailPage({ params }) {
  const { id } = await params;
  const { data: post } = await getArticle(id);

  return (
    <section className="flex flex-col w-full mb-[16.94rem] pt-6 md:pt-[1.62rem] md:mb-[18.19rem] lg:pt-[2.13rem] lg:mb-[12.06rem]">
      <div className="pb-4 mb-4 md:mb-6 border-b border-gray-200">
        <div className="flex justify-between gap-2 w-full pb-4">
          <h2 className="text-xl-bold">{post.title}</h2>
          <PostKebabMenu id={id} />
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="/icons/ic-profile.svg"
              width={40}
              height={40}
              alt="프로필 사진"
            />
            <div className="flex gap-1 text-md-medium md:gap-2">
              <span className="text-gray-600">닉네임</span>
              <span className="text-gray-400">
                {format(new Date(post.createdAt), "yyyy. MM. dd")}
              </span>
            </div>
          </div>

          <div className="w-px h-[2.125rem] bg-gray-200" />

          <div className="flex flex-col items-start h-10 px-3 py-1 rounded-full border border-gray-200 bg-white">
            <div className="flex items-center gap-1 ">
              <Image
                src="/icons/ic-heart.svg"
                width={32}
                height={32}
                alt=""
                aria-hidden="true"
              />
              <span className="text-lg-medium text-gray-500">123</span>
            </div>
          </div>
        </div>
      </div>

      <p className="mb-8 md:mb-10 lg:mb-8 text-lg lg:text-2lg font-normal">
        {post.content}
      </p>

      <div className="flex flex-col mb-6 md:mb-8 lg:mb-10">
        <h3 className="mb-2 text-lg-semibold">댓글달기</h3>
        <CommentForm postId={id} />
      </div>

      <CommentList postId={id} />

      <Button
        className="w-[15rem] px-[2.47rem] py-[0.75rem] mx-auto rounded-full "
        href="/community"
      >
        <div className="flex items-center gap-2">
          <span className="text-2lg-semibold">목록으로 돌아가기</span>
          <Image src="/icons/ic-back.svg" width={24} height={24} alt="" />
        </div>
      </Button>
    </section>
  );
}
