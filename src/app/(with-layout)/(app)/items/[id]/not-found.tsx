import { BackToListButton } from "@/common/components/ui/BackToListButton";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20">
      <p className="text-xl font-bold text-gray-800">
        존재하지 않거나 삭제된 상품입니다.
      </p>
      <BackToListButton href="/items" />
    </div>
  );
}
