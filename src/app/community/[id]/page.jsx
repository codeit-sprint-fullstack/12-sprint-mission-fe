import Image from "next/image";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { getArticle } from "@/lib/api/posts";
import BackToCommunitBtn from "./_components/BackToCommunityBtn";
import CommentSection from "./_components/CommentSection";
import PostKebabMenu from "./_components/PostKebabMenu";
import LikeCountClient from "./_components/LikeCountClient";

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const { data: post } = await getArticle(id);
    return { title: post.title };
  } catch {
    return { title: "게시글을 찾을 수 없어요" };
  }
}

export default async function PostDetailPage({ params }) {
  const { id } = await params;

  let post;
  try {
    const { data } = await getArticle(id);
    post = data;
  } catch (err) {
    if (err.status === 404) {
      notFound();
    }
    throw err;
  }

  return (
    <section className="flex flex-col w-full">
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

          <LikeCountClient initialCount={123} />
        </div>
      </div>

      <p className="mb-8 md:mb-10 lg:mb-8 text-lg lg:text-2lg font-normal">
        {post.content}
      </p>

      <CommentSection postId={id} />

      <BackToCommunitBtn />
    </section>
  );
}
