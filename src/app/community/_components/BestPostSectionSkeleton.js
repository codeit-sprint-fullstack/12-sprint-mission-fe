export default function BestPostSectionSkeleton() {
  return (
    <div className="flex gap-4 md:gap-6">
      <BestPostCardSkeleton />
      <div className="hidden md:block flex-1 min-w-0">
        <BestPostCardSkeleton />
      </div>
      <div className="hidden xl:block flex-1 min-w-0">
        <BestPostCardSkeleton />
      </div>
    </div>
  );
}

function BestPostCardSkeleton() {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex flex-col items-start gap-4 h-full px-6 pb-4 rounded-lg bg-gray-50 xl:h-[10.5625rem] xl:pb-2 xl:gap-[0.625rem]">
        <div className="w-[6.375rem] h-7 rounded-b-2xl bg-gray-200 animate-pulse" />

        <div className="flex w-full justify-between gap-2">
          <div className="flex-1 h-6 rounded bg-gray-200 animate-pulse" />
          <div className="w-[4.5rem] h-[4.5rem] rounded-lg bg-gray-200 animate-pulse flex-shrink-0" />
        </div>

        <div className="flex justify-between items-center w-full mt-6 xl:mt-0">
          <div className="w-24 h-4 rounded bg-gray-200 animate-pulse" />
          <div className="w-20 h-4 rounded bg-gray-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
