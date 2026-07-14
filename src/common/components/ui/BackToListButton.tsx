import Image from "next/image";

import { Button } from "@/common/components/ui/Button";

type BackToListButtonProps = {
  href: string;
};

export function BackToListButton({ href }: BackToListButtonProps) {
  return (
    <div className="flex justify-center">
      <Button size="lg" rounded="full" className="w-[15rem]" href={href}>
        목록으로 돌아가기
        <Image src="/icons/ic-back.svg" width={24} height={24} alt="" />
      </Button>
    </div>
  );
}
