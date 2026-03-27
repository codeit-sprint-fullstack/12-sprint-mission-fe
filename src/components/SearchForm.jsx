const SearchForm = ({ keyword, onChangeKeyword }) => {
  return (
    <label htmlFor="searchKeyword" className="search-keyword">
      <input
        type="text"
        id="searchKeyword"
        value={keyword}
        onChange={onChangeKeyword}
      />
      {keyword ? <></> : <span>검색할 상품을 입력해주세요</span>}
    </label>
  );
};

export default SearchForm;
