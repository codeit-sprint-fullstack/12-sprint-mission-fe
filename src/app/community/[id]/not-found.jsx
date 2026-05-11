import BackToCommunitBtn from "./_components/BackToCommunityBtn";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20">
      <p className="text-xl-bold text-gray-800">
        존재하지 않거나 삭제된 게시글입니다.
      </p>
      <BackToCommunitBtn />
    </div>
  );
}
