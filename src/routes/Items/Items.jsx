import ProductWrap from "../../components/ProductWrap";
import SearchForm from "../../components/SearchForm";
import ProductList from "../../components/ProductList";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import usePageSize from "../../hooks/usePageSize";
import { getProductList } from "../../api/products";
import { Link } from "react-router-dom";
import Sorting from "../../components/Sorting";

const Items = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");
  const totalLimit = usePageSize("total");
  const totalPages = Math.ceil(totalCount / totalLimit);
  const [sorting, setSorting] = useState("recent");
  const [isSortOpen, setIsSortOpen] = useState(false);
  // console.log("total p s => ", totalLimit, "/// best p s => ", bestLimit);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 300);

    return () => clearTimeout(timer);
  }, [keyword]);

  /* 전체 상품 목록 조회 */
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductList(page, totalLimit, debouncedKeyword);
      setProducts(data.list ?? []);
      setTotalCount(data.totalCount ?? 0);
      setIsLoading(false);
    };

    fetchProducts();
  }, [page, debouncedKeyword, totalLimit]);

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
    setPage(1);
  };

  const handleToggleSortList = () => {
    // setIsSortOpen((prev) => !prev);
  };

  const handleChangeSorting = (sort) => {
    setSorting(sort);
    // setIsSortOpen((prev) => !prev);
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <ProductWrap
      title="판매 중인 상품"
      header={
        <>
          <SearchForm keyword={keyword} onChangeKeyword={handleChangeKeyword} />

          <Link to={`/registration`} className="btn-primary btn-sm">
            상품 등록하기
          </Link>

          <Sorting
            sorting={sorting}
            isSortOpen={isSortOpen}
            onToggle={handleToggleSortList}
            onSorting={handleChangeSorting}
          />
        </>
      }
    >
      {isLoading ? (
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBlock: 30,
          }}
        >
          상품을 불러오는 중...
        </p>
      ) : (
        <>
          <ProductList
            lists={products}
            keyword={debouncedKeyword}
            type="total"
          />

          <Pagination
            page={page}
            totalPages={totalPages}
            onPrev={handlePrevPage}
            onNext={handleNextPage}
            onChangePage={setPage}
          />
        </>
      )}
    </ProductWrap>
  );
};

export default Items;
