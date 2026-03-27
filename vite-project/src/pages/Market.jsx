import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BestProduct from "../components/BestProduct";
import "./Market.css";

const Market = () => {
  let [product, setProduct] = useState([]);
  let page = 0;
  let pageSize = 0;
  let orderBy = "recent";
  let keyword = "";
  // async function getProduct() {
  //   try {
  //     const res = await fetch("https://panda-market-api.vercel.app/products");
  //     const result = await res.json();
  //     setProduct(result.list);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <div>
      {/* <Header /> */}
      <main className="main-container">
        <section className="best-prodct">
          <p className="sub-title">베스트 상품</p>
          <BestProduct
            product={product}
            setProduct={setProduct}
            page={1}
            pageSize={4}
            orderBy="favorite"
          />
        </section>
        {/* <section>판매 중인 상품</section>
        <section>페이지네이션</section> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Market;
