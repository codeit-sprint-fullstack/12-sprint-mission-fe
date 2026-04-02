import React, { useEffect, useState } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ total, limit, page, setPage }) => {
  const totalPages = Math.ceil(total / limit);
  const [start, setStart] = useState(1);
  const [curPage, setCurPage] = useState(page);
  const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(true);

  const pageLength =
    totalPages < 5 ? (totalPages <= 1 ? 1 : totalPages - 1) : 5;

  useEffect(() => {
    if (curPage === start + pageLength) setStart((prev) => prev + pageLength);
    if (curPage < start) setStart((prev) => prev - pageLength);

    curPage === 1 ? setIsPrev(false) : setIsPrev(true);
    curPage === totalPages ? setIsNext(false) : setIsNext(true);

    if (page === 1) {
      setStart(page);
      setCurPage(page);
    }
  }, [curPage, pageLength, start]);

  const handlePrevPage = () => {
    if (curPage === 1) return;
    setPage(curPage - 1);
    setCurPage(curPage - 1);
  };

  const handleNextPage = () => {
    if (curPage === totalPages) return;
    setPage(curPage + 1);
    setCurPage(curPage + 1);
  };

  const handleCurPage = (value) => {
    setPage(value);
    setCurPage(value);
  };

  return (
    <>
      <div className="pagination">
        <button
          className={!isPrev ? "page unactive" : "page"}
          onClick={() => {
            handlePrevPage();
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        {Array(pageLength)
          .fill()
          .map((v, i) => {
            const p = i + start;
            return (
              <React.Fragment key={`page-${p}`}>
                {start + i <= totalPages && (
                  <button
                    onClick={() => {
                      handleCurPage(p);
                    }}
                    className={curPage === p ? "page active" : "page"}
                  >
                    {p}
                  </button>
                )}
              </React.Fragment>
            );
          })}

        <button
          className={!isNext ? "page unactive" : "page"}
          onClick={() => {
            handleNextPage();
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </>
  );
};

export default Pagination;
