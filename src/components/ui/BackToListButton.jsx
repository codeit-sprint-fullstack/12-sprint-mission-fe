import Image from "next/image";
import Button from "@/components/ui/Button";

export default function BackToListButton({ href }) {
  return (
    <div className="flex justify-center">
      <Button size="lg" rounded="full" className="w-[15rem]" href={href}>
        목록으로 돌아가기
        <Image src="/icons/ic-back.svg" width={24} height={24} alt="" />
      </Button>
    </div>
  );
}
