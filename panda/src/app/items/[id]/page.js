export default function ItemDetailPage({ params }) {
  const { id } = params;

  return (
    <main style={{ padding: "80px 24px" }}>
      <h1>상품 상세 페이지</h1>
      <p>상품 ID: {id}</p>
    </main>
  );
}
