"use client";

import LikeCountClient from "@/hooks/useLikeCount";
import LikeCount from "@/components/ui/LikeCount";

export default function LikeCountClient({ initialCount }) {
  const { liked, count, handleToggle } = LikeCountClient({ initialCount });

  return <LikeCount liked={liked} count={count} onToggle={handleToggle} />;
}
