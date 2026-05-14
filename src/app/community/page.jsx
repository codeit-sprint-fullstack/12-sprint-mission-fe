import Image from "next/image";
import React from "react";
import icSearch from "../../../public/icons/ic_search.png";
import icSortBtn from "../../../public/icons/ic_btn_sort.png";
import BestItemList from "./_components/BestItemList";
import ArticlesList from "./_components/ArticlesList";

const CommunityPage = () => {
  return (
    <div className="flex flex-col items-center my-[24px]">
      <main className="flex flex-col mx-[16px] md:mx-[24px] xl:w-[1200px] gap-[40px]">
        <section className="flex flex-col gap-[24px]">
          <h2 className="text-xl font-bold text-(--Secondary-900)">
            베스트 게시글
          </h2>
          <BestItemList />
        </section>
        <section className="flex flex-col gap-[24px]">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-(--Secondary-900)">게시글</h2>
            <button className="text-lg font-semibold text-white text-center rounded-lg bg-(--Primary-100) px-[23px] py-[8px]">
              글쓰기
            </button>
          </div>
          <div className="flex justify-between gap-2">
            <div className="relative w-full">
              <Image
                src={icSearch}
                alt="검색 아이콘"
                className="absolute top-2 left-4"
              />
              <input
                type="text"
                placeholder="검색할 상품을 입력해주세요"
                className="w-full h-[42px] pl-11 pr-3 bg-(--Secondary-100) rounded-xl text-lg"
              />
            </div>
            <select className="hidden w-[130px] px-[20px] border-1 border-(--Secondary-200) bg-white rounded-xl md:block">
              <option>최신순</option>
              <option>좋아요순</option>
            </select>
            <Image
              src={icSortBtn}
              alt="정렬 버튼 아이콘"
              width={42}
              height={42}
              className="block shrink-0 md:hidden"
            />
          </div>
          <ArticlesList />
        </section>
      </main>
    </div>
  );
};

export default CommunityPage;
