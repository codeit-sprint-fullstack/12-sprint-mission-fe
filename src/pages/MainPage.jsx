import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MainPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://panda-market-api.vercel.app/products");
      const data = await res.json();
      console.log(data);

      setProducts(data.list);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <section>
        <h2>베스트 상품</h2>
        <div>
          <ProductCard item={item} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MainPage;
