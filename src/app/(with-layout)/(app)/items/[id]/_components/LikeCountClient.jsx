"use client";

import { toast } from "react-hot-toast";
import useLikeCount from "@/hooks/useLikeCount";
import useUser from "@/hooks/useUser";
import { toggleProductFavorite } from "@/lib/api/products";
import LikeCount from "@/components/ui/LikeCount";

export default function LikeCountClient({
  productId,
  initialCount,
  initialLiked,
}) {
  const { data: user } = useUser();

  const { liked, count, handleToggle } = useLikeCount({
    initialCount,
    initialLiked,
    mutateFn: (nextLiked) => toggleProductFavorite(productId, nextLiked),
  });

  const handleLikeClick = () => {
    if (!user) {
      toast.error("로그인이 필요한 기능입니다.");
      return;
    }

    handleToggle();
  };

  return <LikeCount liked={liked} count={count} onToggle={handleLikeClick} />;
}
