"use client";

import { BackToListButton } from "@/common/components/ui/BackToListButton";
import { Button } from "@/common/components/ui/Button";
import type { ErrorPageProps } from "@/common/types/error";

export default function Error({ reset }: ErrorPageProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-40">
      <p className="text-xl font-bold text-gray-800">
        상품을 불러오는 중 문제가 발생했습니다.
      </p>
      <div className="flex flex-col gap-3">
        <Button
          variant="secondary"
          size="lg"
          rounded="full"
          className="w-[15rem]"
          onClick={() => reset()}
        >
          <span className="text-2lg font-semibold">다시 시도</span>
        </Button>

        <BackToListButton href="/items" />
      </div>
    </div>
  );
}
