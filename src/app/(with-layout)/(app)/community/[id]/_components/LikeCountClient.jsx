"use client";

import useLikeCountClient from "@/hooks/useLikeCount";
import LikeCount from "@/components/ui/LikeCount";

export default function LikeCountClient({ initialCount }) {
  const { liked, count, handleToggle } = useLikeCountClient({ initialCount });

  return <LikeCount liked={liked} count={count} onToggle={handleToggle} />;
}
