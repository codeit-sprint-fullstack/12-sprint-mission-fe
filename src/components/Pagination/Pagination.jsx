import paginationStyles from "./Pagination.module.css";

const PAGE_GROUP = 5;

const Pagination = ({ page, totalPages, onNext, onPrev, onChangePage }) => {
  const currentGroup = Math.floor((page - 1) / PAGE_GROUP);
  const groupStartPage = currentGroup * PAGE_GROUP + 1;
  const groupEndPage = Math.min(groupStartPage + PAGE_GROUP - 1, totalPages);
  const viewPages = [];
  for (let i = groupStartPage; i <= groupEndPage; i++) {
    viewPages.push(i);
  }

  return (
    <div className={paginationStyles.pagination}>
      <button
        onClick={onPrev}
        disabled={page === 1}
        className={`${paginationStyles.page} ${paginationStyles.prev}`}
      >
        <span className="sr-only">이전</span>
      </button>

      {viewPages.map((p) => (
        <button
          key={p}
          onClick={() => {
            onChangePage(p);
          }}
          className={`${paginationStyles.page} ${page === p && paginationStyles.current}`}
        >
          {p}
        </button>
      ))}

      {/* <button
        onClick={() => {
          onChangePage(1);
        }}
        className={`btn-page ${page === 1 ? "current" : ""}`}
      >
        1
      </button>
      <button
        onClick={() => {
          onChangePage(2);
        }}
        className={`btn-page ${page === 2 ? "current" : ""}`}
      >
        2
      </button>
      <button
        onClick={() => {
          onChangePage(3);
        }}
        className={`btn-page ${page === 3 ? "current" : ""}`}
      >
        3
      </button>
      <button
        onClick={() => {
          onChangePage(4);
        }}
        className={`btn-page ${page === 4 ? "current" : ""}`}
      >
        4
      </button>
      <button
        onClick={() => {
          onChangePage(5);
        }}
        className={`btn-page ${page === 5 ? "current" : ""}`}
      >
        5
      </button> */}

      <button
        onClick={onNext}
        disabled={page === totalPages}
        className={`${paginationStyles.page} ${paginationStyles.next}`}
      >
        <span className="sr-only">다음</span>
      </button>
    </div>
  );
};

export default Pagination;
