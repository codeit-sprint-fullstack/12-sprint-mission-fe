import ProductWrap from "../components/ProductWrap";
import SearchForm from "../components/SearchForm";
import Sorting from "../components/Sorting";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import usePageSize from "../hooks/usePageSize";
import { getProductList } from "../api/products";

const Items = () => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState("recent");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");
  const totalLimit = usePageSize("total");
  const totalPages = Math.ceil(totalCount / totalLimit);

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
      const data = await getProductList(
        page,
        totalLimit,
        sorting,
        debouncedKeyword,
      );
      setProducts(data.list ?? []);
      setTotalCount(data.totalCount ?? 0);
    };

    fetchProducts();
  }, [page, sorting, debouncedKeyword, totalLimit]);

  const handleToggleSortList = () => {
    setIsSortOpen((prev) => !prev);
  };

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
    setPage(1);
  };

  const handleChangeSorting = (sort) => {
    setSorting(sort);
    setIsSortOpen((prev) => !prev);
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

          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              alert("준비중입니다");
              return false;
            }}
            className="btn-primary btn-sm"
          >
            상품 등록하기
          </a>

          <Sorting
            sorting={sorting}
            isSortOpen={isSortOpen}
            onToggle={handleToggleSortList}
            onSorting={handleChangeSorting}
          />
        </>
      }
    >
      <ProductList lists={products} type="total" />

      <Pagination
        page={page}
        totalPages={totalPages}
        onPrev={handlePrevPage}
        onNext={handleNextPage}
        onChangePage={setPage}
      />
    </ProductWrap>
  );
};

export default Items;
