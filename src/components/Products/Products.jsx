import React from "react";
import ProductsList from "./ProductsList";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";
import useProduct from "../../hooks/useProduct";

const Products = () => {
  const {
    total,
    page,
    setPage,
    limit,
    setOrderBy,
    setKeyword,
    products,
    bestProducts,
  } = useProduct();

  const handleOrderBy = (v) => {
    setOrderBy(v);
  };

  const handleSearch = (v) => {
    setKeyword(v);
    setPage(1);
  };

  return (
    <main className="product-container">
      <article className="product-box best">
        <div className="product-title-box">
          <h3 className="product-title">베스트 상품</h3>
        </div>
        <ProductsList products={bestProducts} />
      </article>

      <article className="product-box">
        <div className="product-title-box">
          <SearchBar
            title={"판매 중인 상품"}
            onChange={handleOrderBy}
            onSearch={handleSearch}
          />
        </div>

        <ProductsList products={products} />
      </article>

      <Pagination
        total={total !== undefined ? total : 1}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </main>
  );
};

export default Products;
