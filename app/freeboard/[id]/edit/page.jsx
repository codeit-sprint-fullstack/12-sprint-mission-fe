import ArticleFormPage from "../../../../src/components/board/ArticleFormPage";

export default function EditArticlePage({ params }) {
  return <ArticleFormPage articleId={params.id} />;
}
