const Sorting = ({ sorting, isSortOpen, onToggle, onSorting }) => {
  return (
    <div className="sorting-ui">
      <button
        className={`current-sort${isSortOpen ? " open" : ""}`}
        onClick={onToggle}
      >
        <span>{sorting === "recent" ? "최신순" : "좋아요순"}</span>
      </button>
      {isSortOpen && (
        <ul className="sort-list">
          <li>
            <button
              onClick={() => {
                onSorting("recent");
              }}
            >
              최신순
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                onSorting("favorite");
              }}
            >
              좋아요순
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sorting;
