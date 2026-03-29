import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ page, pageSize, setPage, setPageSize }) => {
  const [pageNum, setPageNum] = useState(0); //페이지의 총 개수
  const [activePage, setActivePage] = useState(1); //필요없는 듯. page, setPage의 역할 이니까.
  const [activePageSet, setActivePageSet] = useState(0); //필요없는 듯. page, setPage의 역할 이니까.

  //총 페이지 수를 계산함
  useEffect(() => {
    const fetchData = async () => {
      console.log("pageNum 가져오는중");
      const response = await fetch("http://localhost:4000/totalCount");
      const result = await response.json();
      console.log("result", result);
      const addAPage = result % pageSize > 0 ? 1 : 0; //pageSize미만의 요소를 담는 페이지
      setPageNum(result / pageSize + addAPage); //페이지 개수
    };
    fetchData();
  }, [pageSize]);

  /* 페이지 html을 담는 배열을 만들기. 2차원 배열로 만들어서, 5개씩 담아두기 
    pages[0][0~4] 은 1~5번째 페이지, pages[1][0~4]는 6~10번째 페이지 ...*/
  //첫번째 인덱스는, 페이지 개수를 5로 나누어서 함. (remainPage)
  //두번째 인덱스는, 0~4까지 출력하도록 하나, 만약 값이 없다면 그냥 리턴.

  const reaminPageSet = pageNum % pageSize > 0 ? 1 : 0;
  const pageSet = pageNum / pageSize + reaminPageSet;
  console.log("pageNum", pageNum);

  const pages = [];
  //pageSet배열 추가
  for (let i = 0; i < pageSet; i++) {
    pages.push([]); //빈 배열 한 개 추가
  }
  //실제 page html을 추가
  console.log("pageSet", pageSet);
  for (let i = 0; i < pageSet; i++) {
    for (let j = 0; j < 5; j++) {
      if (i * 5 + j < pageNum) {
        //페이지 총 개수에 아직 도달하지 않았을 때만
        pages[i].push(
          <button
            className={page === i * 5 + j + 1 ? "active-page-btn" : "page-btn"}
            key={i * 5 + j}
            onClick={() => setPage(i * 5 + j + 1)}
          >
            {i * 5 + j + 1}
            {/* page는 1부터 시작해야 되니까 */}
          </button>,
        );
      }
    }
  }
  console.log("pages=>", pages);

  return (
    <div className="pagination">
      <button
        className="page-btn"
        onClick={() =>
          setActivePageSet(activePageSet > 0 ? activePageSet - 1 : 0)
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M9.5 4.66669L6 8.16669L9.5 11.6667"
            stroke="#4B5563"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {pages[activePageSet] && pages[activePageSet].map((page) => page)}
      {/* {pages.map((pageSet) => pageSet.map((page) => page))} */}

      <button
        className="page-btn"
        onClick={() =>
          setActivePageSet(
            activePageSet < pageSet ? activePageSet + 1 : activePageSet - 1,
          )
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6 4.66656L9.5 8.16656L6 11.6666"
            stroke="#4B5563"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
