"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import icSearch from "@/assets/icons/ic_search.png";
import icSortBtn from "@/assets/icons/ic_btn_sort.png";
import icDropdown from "@/assets/icons/ic_arrow_down.png";

import type { Product } from "../../../../types";
import Button from "../../../components/Button";
import ProductCard from "../../../components/ProductCard";
import Pagination from "../../../components/Pagination";

const fetchProducts = async (
  page: number,
  pageSize: number,
  orderBy: string,
  keyword: string,
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PANDAMARKET_API_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
  );
  if (!res.ok) throw new Error("데이터를 불러오는데 실패했습니다.");
  const data = await res.json();

  return data;
};

const SellingProductsList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOrderBy = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOrderBy(e.currentTarget.value);
    setIsOpen(false);
  };

  // Debounce 로직
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500); // 타이핑 멈추고 0.5초 뒤에만 debouncedKeyword 업데이트

    return () => clearTimeout(timer);
  }, [keyword]);

  useEffect(() => {
    setPage(1);
  }, [debouncedKeyword, orderBy]);

  // 정렬 드롭다운
  const sortDropdownList = () => {
    return (
      <div className="absolute mt-2 flex flex-col w-[130px] text-(--Secondary-800) text-center items-center text-lg text-(--Secondary-500) top-[50px] z-10 right-0 top-full">
        <button
          className="w-full pt-[16px] pb-[12px] text-center bg-white rounded-t-lg  border-1 border-(--Secondary-300) border-b cursor-pointer hover:text-gray-900"
          value="recent"
          onClick={handleToggleOrderBy}
        >
          최신순
        </button>
        <button
          className="w-full pt-[12px] pb-[16px] text-center bg-white rounded-b-lg  border-l-1 border-r-1 border-b-1 border-(--Secondary-300) cursor-pointer hover:text-gray-900"
          value="favorite"
          onClick={handleToggleOrderBy}
        >
          좋아요순
        </button>
      </div>
    );
  };

  const mobileHeader = () => {
    return (
      <div className="flex flex-col gap-2 md:hidden">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-(--Secondary-900) font-bold">
            판매 중인 상품
          </h2>
          <Button as={"Link"} href={"/items/create"}>
            상품 등록하기
          </Button>
        </div>
        <div className="flex gap-2">
          <div className="relative w-full md:w-[242px] xl:w-[325px]">
            <Image
              src={icSearch}
              alt="검색 아이콘"
              className="absolute top-2 left-4"
            />
            <input
              type="text"
              name="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="검색할 상품을 입력해주세요"
              className="w-full h-[42px] pl-11 pr-3 bg-(--Secondary-100) rounded-xl text-lg"
            />
          </div>
          <div className="relative">
            <Image
              src={icSortBtn}
              alt="정렬 버튼 아이콘"
              width={42}
              height={42}
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              className="block shrink-0 md:hidden"
            />
            {isOpen ? sortDropdownList() : <></>}
          </div>
        </div>
      </div>
    );
  };

  // 윈도우 사이즈에 따른 pageSize 동적 계산 로직
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        if (width >= 1280) {
          setPageSize(10);
        } else if (width >= 768) {
          setPageSize(6);
        } else {
          setPageSize(4);
        }
      }, 200); // 200ms 동안 크기 조절이 멈추면 실행 (API 과호출 방지)
    };

    // 마운트 시 최초 1회 실행하여 현재 화면 크기에 맞춤
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // TanStack Query
  const { data, isPending, isError } = useQuery({
    queryKey: ["products", { page, pageSize, orderBy, debouncedKeyword }],
    queryFn: () => fetchProducts(page, pageSize, orderBy, debouncedKeyword),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });

  const products = data?.list || [];
  const limit = pageSize;
  const totalPages = Math.ceil((data?.totalCount || 0) / limit);
  return (
    <section className="w-full max-w-[1200px] mx-auto flex flex-col gap-[16px]">
      {mobileHeader()}
      <div className="hidden md:flex items-center justify-between">
        <h2 className="text-xl text-(--Secondary-900) font-bold">
          판매 중인 상품
        </h2>
        <div className="flex gap-2">
          <div className="relative w-full md:w-[242px] xl:w-[325px]">
            <Image
              src={icSearch}
              alt="검색 아이콘"
              className="absolute top-2 left-4"
            />
            <input
              type="text"
              name="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="검색할 상품을 입력해주세요"
              className="w-full h-[42px] pl-11 pr-3 bg-(--Secondary-100) rounded-xl text-lg"
            />
          </div>
          <Button as={"Link"} href={"/items/create"}>
            상품 등록하기
          </Button>
          <div className="relative">
            <button
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              className="hidden md:flex items-center justify-between w-[130px] px-[20px] py-[7px] border-1 border-(--Secondary-200) rounded-xl"
            >
              <span className="text-lg text-(--Secondary-800)">
                {orderBy === "recent" ? "최신순" : "좋아요순"}
              </span>
              <Image
                src={icDropdown}
                alt="정렬 화살표"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </button>
            <Image
              src={icSortBtn}
              alt="정렬 버튼 아이콘"
              width={42}
              height={42}
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              className="block shrink-0 md:hidden"
            />
            {isOpen ? sortDropdownList() : <></>}
          </div>
        </div>
      </div>
      {isPending && products.length === 0 ? (
        <div className="py-10 text-center">로딩 중...</div>
      ) : isError ? (
        <div className="py-10 text-center text-red-500">
          에러가 발생했습니다.
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 xl:gap-[24px]">
          {products.map((product: Product) => (
            <Link href={`/items/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="py-10 text-2xl text-center font-bold md:text-3xl">
          검색된 목록이 없습니다..
        </p>
      )}
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </section>
  );
};

export default SellingProductsList;
