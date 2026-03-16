import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

getArticleList();

getArticle(5642);

createArticle("양념치킨", "bhc꺼 먹고싶다.", "https://이미지url.com/1.jpg");

patchArticle(5642, "양념치킨", "bhc 먹고싶다.", "https://이미지url.com/1.jpg");

deleteArticle(5641);
