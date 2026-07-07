"use client";

import { toast } from "react-hot-toast";

import LikeCount from "@/components/ui/LikeCount";
import useLikeCount from "@/hooks/useLikeCount";
import { useUser } from "@/features/user/hooks/useUser";

type LikeCountClientProps = {
  initialCount: number;
  initialLiked?: boolean;
  mutateFn: (nextLiked: boolean) => Promise<unknown>;
};

export default function LikeCountClient({
  initialCount,
  initialLiked = false,
  mutateFn,
}: LikeCountClientProps) {
  const { data: user } = useUser();

  const { liked, count, handleToggle } = useLikeCount({
    initialCount,
    initialLiked,
    mutateFn,
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
