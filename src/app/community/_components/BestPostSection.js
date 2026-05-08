import { getArticles } from "@/lib/api/posts";
import BestPostCard from "./BestPostCard";

export default async function BestPostSection() {
  const { data } = await getArticles({ pageSize: 3 });
  const [first, second, third] = data;

  return (
    <div className="flex gap-4 md:gap-6">
      {first && <BestPostCard post={first} />}
      {second && (
        <div className="hidden md:block flex-1">
          <BestPostCard post={second} />
        </div>
      )}
      {third && (
        <div className="hidden xl:block flex-1">
          <BestPostCard post={third} />
        </div>
      )}
    </div>
  );
}
