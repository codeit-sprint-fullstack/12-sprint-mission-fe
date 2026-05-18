import ArticleDetailPage from "../../../src/components/board/ArticleDetailPage";

export default function ArticlePage({ params }) {
  return <ArticleDetailPage articleId={params.id} />;
}
