import React, { useEffect, useState } from 'react';

const BestList = () => {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    fetch('https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite')
      .then((res) => res.json())
      .then((data) => {
        console.log("Best Products Data:", data);
        setBestProducts(data.list || []);
      })
      .catch((err) => console.error("베스트 상품 로딩 실패:", err));
  }, []);

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '40px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: '#1F2937' }}>베스트 상품</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {bestProducts.length > 0 ? (
            bestProducts.map((item) => (
              <div key={item.id} style={{ cursor: 'pointer' }}>
                <img 
                  src={item.images && item.images[0] ? item.images[0] : '/이미지/default.png'} 
                  alt={item.name} 
                  style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '16px' }} 
                />
                <p style={{ marginTop: '12px', fontSize: '16px', fontWeight: '600', color: '#374151' }}>{item.name}</p>
                <p style={{ fontSize: '18px', fontWeight: '700', color: '#1F2937' }}>{item.price.toLocaleString()}원</p>
                <p style={{ fontSize: '14px', color: '#6B7280' }}>❤️ {item.favoriteCount}</p>
              </div>
            ))
          ) : (
            <p>데이터를 불러오는 중입니다...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BestList;