import CommentListSkeleton from "@/features/comment/components/CommentListSkeleton";

export default function Loading() {
  return (
    <section className="flex flex-col w-full">
      <div className="pb-4 mb-4 md:mb-6 border-b border-gray-200">
        <div className="flex justify-between gap-2 w-full pb-4">
          <div className="h-8 w-2/3 rounded bg-gray-200 animate-pulse" />
          <div className="h-6 w-6 rounded bg-gray-200 animate-pulse" />
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
            <div className="flex gap-1">
              <div className="w-16 h-4 rounded bg-gray-200 animate-pulse" />
              <div className="w-24 h-4 rounded bg-gray-200 animate-pulse" />
            </div>
          </div>
          <div className="w-px h-[2.125rem] bg-gray-200" />
          <div className="h-10 w-20 rounded-full border border-gray-200 bg-gray-200 animate-pulse" />
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-8 md:mb-10 lg:mb-8">
        <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
        <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
        <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
      </div>

      <div className="flex flex-col mb-6 md:mb-8 lg:mb-10">
        <div className="h-5 w-16 rounded bg-gray-200 animate-pulse mb-2" />
        <div className="w-full h-[6.5rem] rounded-xl bg-gray-200 animate-pulse" />
        <div className="flex justify-end mt-3">
          <div className="w-[4.5rem] h-[2.625rem] rounded-lg bg-gray-200 animate-pulse" />
        </div>
      </div>

      <CommentListSkeleton />

      <div className="w-[15rem] h-[3rem] rounded-full bg-gray-200 animate-pulse mx-auto" />
    </section>
  );
}
