import { getArticles } from "@/features/article/api";
import { BestPostCard } from "@/features/article/components/BestPostCard";

export async function BestPostList() {
  const { data } = await getArticles({ pageSize: 3, orderBy: "favorite" });
  const [first, second, third] = data;

  return (
    <ul className="flex gap-4 md:gap-6">
      {first && (
        <li className="flex-1 min-w-0">
          <BestPostCard post={first} />
        </li>
      )}
      {second && (
        <li className="hidden md:block flex-1 min-w-0">
          <BestPostCard post={second} />
        </li>
      )}
      {third && (
        <li className="hidden xl:block flex-1 min-w-0">
          <BestPostCard post={third} />
        </li>
      )}
    </ul>
  );
}
