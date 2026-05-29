"use client";

import { toast } from "react-hot-toast";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useLikeCount from "@/hooks/useLikeCount";
import useUser from "@/hooks/useUser";
import { getProduct, toggleProductFavorite } from "@/lib/api/products";
import LikeCount from "@/components/ui/LikeCount";

export default function LikeCountClient({ productId, initialCount }) {
  const { data: user } = useUser();
  const queryClient = useQueryClient();

  const { data: product } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
    enabled: !!user,
  });

  const { liked, count, handleToggle } = useLikeCount({
    initialCount,
    initialLiked: product?.isFavorite ?? false,
    mutateFn: (nextLiked) => toggleProductFavorite(productId, nextLiked),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
    },
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
