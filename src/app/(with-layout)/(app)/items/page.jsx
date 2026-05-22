export const metadata = {
  title: "중고마켓",
};

export default async function MarketPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-6 mb-6 lg:mb-10">
        <h2 className="text-xl font-bold">베스트 게시글</h2>
      </section>
    </div>
  );
}
