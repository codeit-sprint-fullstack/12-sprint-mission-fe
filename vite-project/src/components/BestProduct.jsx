import { useEffect, useState } from "react";
import heart from "../assets/img/heart.png";
import "./BestProduct.css";

const BestProduct = ({ page, orderBy }) => {
  const [product, setProduct] = useState([]);

  const getPageSize = () => {
    if (window.innerWidth < 376) return 1;
    if (window.innerWidth < 745) return 2;
    return 4;
  };
  const [pageSize, setPageSize] = useState(getPageSize());
  async function getProduct() {
    try {
      const res = await fetch(
        `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`,
      );
      const result = await res.json();
      setProduct(result.list);
      console.log("베스트 데이터 출력", result.list);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct();
    console.log("Best PageSize 출력" + pageSize);
  }, [pageSize]);

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <p className="sub-title">베스트 상품</p>
      <div className="best-container">
        {product.map((t) => {
          return (
            <div className="best-product-container" key={t.id}>
              <img
                className="best-product-img"
                src={t.images}
                alt="그냥 이미지"
              />
              <div className="best-product-detail">
                <p className="best-detail-title">{t.name}</p>
                <p className="best-detail-price">{t.price}</p>
                <div className="best-love-it">
                  <img src={heart} alt="좋아요" />
                  <p>{t.favoriteCount}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BestProduct;
