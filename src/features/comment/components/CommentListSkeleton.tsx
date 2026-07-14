export function CommentListSkeleton() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 mb-10 md:mb-14 lg:mb-16">
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-6 pb-3 border-b border-gray-300"
        >
          <div className="flex justify-between items-start gap-3">
            <div className="flex flex-col gap-2 flex-1">
              <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
              <div className="h-4 w-2/3 rounded bg-gray-200 animate-pulse" />
            </div>
            <div className="w-6 h-6 rounded bg-gray-200 animate-pulse shrink-0" />
          </div>
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse shrink-0" />
            <div className="flex flex-col gap-1">
              <div className="w-16 h-3 rounded bg-gray-200 animate-pulse" />
              <div className="w-24 h-3 rounded bg-gray-200 animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
