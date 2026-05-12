import { POST_LIMIT } from "@/constants/pagination";

export default function PostSectionSkeleton() {
  return (
    <div>
      {Array.from({ length: POST_LIMIT }).map((_, i) => (
        <div
          key={i}
          className="block w-full mt-6 pb-6 border-b border-gray-200"
        >
          <div className="flex flex-col gap-4">
            <div className="flex w-full justify-between gap-2">
              <div className="flex-1 h-6 rounded bg-gray-200 animate-pulse" />
              <div className="w-[72px] h-[72px] rounded-lg bg-gray-200 animate-pulse flex-shrink-0" />
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="w-40 h-4 rounded bg-gray-200 animate-pulse" />
              <div className="w-12 h-4 rounded bg-gray-200 animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
