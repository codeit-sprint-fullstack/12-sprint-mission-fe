import Image from "next/image";
import Button from "@/components/ui/Button";

export default function BackToCommunitBtn() {
  return (
    <Button
      className="w-[15rem] px-[2.47rem] py-[0.75rem] mx-auto rounded-full "
      href="/community"
    >
      <div className="flex items-center gap-2">
        <span className="text-2lg-semibold">목록으로 돌아가기</span>
        <Image src="/icons/ic-back.svg" width={24} height={24} alt="" />
      </div>
    </Button>
  );
}
