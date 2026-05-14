import Image from "next/image";
import React from "react";
import icFavorite from "../../../public/icons/ic_favorite.png";
import imgSeed from "../../../public/images/img_seed.png";
import icSearch from "../../../public/icons/ic_search.png";
import icProfile from "../../../public/icons/ic_profile_sm.svg";
import icSortBtn from "../../../public/icons/ic_btn_sort.png";
import BestItemList from "./_components/BestItemList";

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
          <div className="flex flex-col gap-[24px]">
            <div className="pb-[24px] flex flex-col gap-[16px] bg-(--background-gray) border-b-1 border-(--Secondary-200)">
              <div className="flex justify-between gap-[8px]">
                <p className="text-xl font-semibold text-(--Secondary-800)">
                  맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
                </p>
                <div className="w-[72px] h-[72px] p-[12px] flex justify-center items-center rounded-md border-1 border-(--Secondary-200) bg-white shrink-0">
                  <Image
                    src={imgSeed}
                    alt="상품 이미지"
                    width={72}
                    height={72}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center text-md">
                <div className="flex gap-2">
                  <Image
                    src={icProfile}
                    alt="프로필 이미지"
                    width={24}
                    height={24}
                  />
                  <p className="text-(--Secondary-600)">총명한판다</p>
                  <p className="text-(--Secondary-400)">2024. 04. 16</p>
                </div>
                <div className="flex gap-1 items-center">
                  <Image src={icFavorite} alt="좋아요" width={16} height={16} />
                  <p className="text-(--Secondary-500)">9999+</p>
                </div>
              </div>
            </div>
            <div className="pb-[24px] flex flex-col gap-[16px] bg-(--background-gray) border-b-1 border-(--Secondary-200)">
              <div className="flex justify-between">
                <p className="text-xl font-semibold text-(--Secondary-800)">
                  맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
                </p>
                <div className="w-[72px] h-[72px] p-[12px] flex justify-center items-center rounded-md border-1 border-(--Secondary-200) bg-white shrink-0">
                  <Image
                    src={imgSeed}
                    alt="상품 이미지"
                    width={72}
                    height={72}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center text-md">
                <div className="flex gap-2">
                  <Image
                    src={icProfile}
                    alt="프로필 이미지"
                    width={24}
                    height={24}
                  />
                  <p className="text-(--Secondary-600)">총명한판다</p>
                  <p className="text-(--Secondary-400)">2024. 04. 16</p>
                </div>
                <div className="flex gap-1 items-center">
                  <Image src={icFavorite} alt="좋아요" width={16} height={16} />
                  <p className="text-(--Secondary-500)">9999+</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CommunityPage;
