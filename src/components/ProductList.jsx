const ProductList = ({ lists, keyword, type }) => {
  return (
    <ul className={`product__list ${type}`}>
      {lists.length ? (
        lists.map((item) => (
          <li key={item.id} className="product__item">
            <div className="item--thumb no-image">
              <span className="sr-only">No Image</span>
            </div>
            <div className="item--info">
              <p className="item--name">{item.name}</p>
              <p className="item--price">{item.price.toLocaleString()}원</p>
            </div>
          </li>
        ))
      ) : (
        <li className="empty-list">
          {keyword ? `${keyword}(으)로 검색` : "등록"}된 상품이 없습니다.
        </li>
      )}
    </ul>
  );
};

export default ProductList;
