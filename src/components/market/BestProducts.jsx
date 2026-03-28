import ProductCard from "./ProductCard";
import { useBestProducts } from "../../hooks/useBestProducts";
import { useBestPageSize } from "../../hooks/useResponsive";
import styles from "./BestProducts.module.css";

export default function BestProducts() {
  const pageSize = useBestPageSize();
  const { bestProducts, loading, error } = useBestProducts(pageSize);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>베스트 상품</h2>

      {error && <p className={styles.error}>오류: {error}</p>}

      <div className={styles.grid}>
        {loading ? (
          <p className={styles.empty}>로딩중...</p>
        ) : (
          bestProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
}
