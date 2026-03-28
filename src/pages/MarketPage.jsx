import BestProducts from '../components/market/BestProducts';
import AllProducts from '../components/market/AllProducts';
import styles from './MarketPage.module.css';

export default function MarketPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BestProducts />
        <AllProducts />
      </div>
    </main>
  );
}
