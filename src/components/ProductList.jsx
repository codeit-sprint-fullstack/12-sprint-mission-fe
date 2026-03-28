import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);

  const fetchProducts = () => {
    fetch(
      `https://panda-market-api.vercel.app/products?page=${page}&pageSize=10&orderBy=${orderBy}&keyword=${keyword}`,
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.list || []))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
  }, [page, orderBy]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchProducts();
  };

  return (
    <section style={{ padding: "40px 0 100px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "700" }}>
            판매 중인 상품
          </h2>
          <div style={{ display: "flex", gap: "12px" }}>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="상품 검색"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                style={{
                  padding: "10px 16px",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  backgroundColor: "#F3F4F6",
                }}
              />
            </form>
            <button
              type="button"
              style={{
                height: "40px",
                padding: "0px 23px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#3692FF",
                color: "#fff",
              }}
            >
              상품 등록하기
            </button>
            <select
              onChange={(e) => setOrderBy(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "12px",
                border: "1px solid #E5E7EB",
              }}
            >
              <option value="recent">최신순</option>
              <option value="favorite">좋아요순</option>
            </select>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "20px",
          }}
        >
          {products.map((item) => (
            <div key={item.id}>
              <img
                src={item.images[0]}
                alt={item.name}
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              />
              <p style={{ marginTop: "10px", fontWeight: "500" }}>
                {item.name}
              </p>
              <p style={{ fontWeight: "700" }}>
                {item.price.toLocaleString()}원
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            style={{
              border: "1px solid #E5E7EB",
              background: "#fff",
              padding: "8px 12px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            &lt;
          </button>
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                backgroundColor: page === num ? "#3692FF" : "transparent",
                color: page === num ? "#fff" : "#6B7280",
              }}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => p + 1)}
            style={{
              border: "1px solid #E5E7EB",
              background: "#fff",
              padding: "8px 12px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
