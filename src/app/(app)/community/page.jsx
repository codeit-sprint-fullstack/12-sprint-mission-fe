import { Suspense } from "react";
import Button from "@/components/ui/Button";
import BestPostSection from "./_components/BestPostSection";
import BestPostSectionSkeleton from "./_components/BestPostSectionSkeleton";
import PostSection from "./_components/PostSection";

export const metadata = {
  title: "자유게시판",
};

export default function CommunityPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-6 mb-6 lg:mb-10">
        <h2 className="text-xl font-bold">베스트 게시글</h2>
        <Suspense fallback={<BestPostSectionSkeleton />}>
          <BestPostSection />
        </Suspense>
      </section>
      <section>
        <div className="flex justify-between items-center w-full mb-4 md:mb-12 lg:mb-6">
          <h2 className="text-xl font-bold">게시글</h2>
          <Button href="/community/write">글쓰기</Button>
        </div>
        <PostSection />
      </section>
    </div>
  );
}
