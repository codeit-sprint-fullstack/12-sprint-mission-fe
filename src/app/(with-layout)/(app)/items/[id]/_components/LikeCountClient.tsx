"use client";

import { toast } from "react-hot-toast";

import LikeCount from "@/components/ui/LikeCount";
import useLikeCount from "@/hooks/useLikeCount";
import { useUser } from "@/hooks/useUser";
import { toggleProductFavorite } from "@/lib/api/products.api";

type LikeCountClientProps = {
  productId: number;
  initialCount: number;
  initialLiked?: boolean;
};

export default function LikeCountClient({
  productId,
  initialCount,
  initialLiked = false,
}: LikeCountClientProps) {
  const { data: user } = useUser();

  const { liked, count, handleToggle } = useLikeCount({
    initialCount,
    initialLiked,
    mutateFn: (nextLiked: boolean) =>
      toggleProductFavorite(productId, nextLiked),
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
