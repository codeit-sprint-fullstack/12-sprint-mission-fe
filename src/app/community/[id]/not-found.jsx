import BackToCommunitBtn from "./_components/BackToCommunityBtn";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20">
      <p className="text-xl-bold text-gray-800">
        해당 게시글을 찾을 수 없습니다.
      </p>
      <BackToCommunitBtn />
    </div>
  );
}
