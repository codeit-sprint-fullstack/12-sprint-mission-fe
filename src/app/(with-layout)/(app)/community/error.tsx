"use client";

import { Button } from "@/common/components/ui/Button";
import type { ErrorPageProps } from "@/common/types/error";

export default function Error({ reset }: ErrorPageProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-40">
      <p className="text-xl font-bold text-gray-800">
        게시글 목록을 불러오는 중 오류가 발생했습니다.
      </p>
      <Button
        variant="secondary"
        size="lg"
        rounded="full"
        className="w-[15rem]"
        onClick={() => reset()}
      >
        <span className="text-2lg font-semibold">다시 시도</span>
      </Button>
    </div>
  );
}
