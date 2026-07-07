import { api } from "@/common/api/client";
import type {
  CommentListResponse,
  CommentResponse,
  CreateCommentBody,
} from "@/common/types/common";
import type { Product, ProductSummary } from "@/features/product/type";
import type { FavoriteResponse } from "@/types/favorite";
import type { ListQueryParams } from "@/types/list";

// 목록 응답
type ProductListResponse = {
  data: ProductSummary[];
  meta: {
    totalCount: number;
    totalPages: number;
  };
};

// 상세 응답
type ProductResponse = {
  data: Product;
};

// 상품 생성 body
type CreateProductBody = {
  name: string;
  description: string;
  price: number;
  tags: string[];
  imageUrl?: string;
};

// 상품 수정 body
type UpdateProductBody = {
  name?: string;
  description?: string;
  price?: number;
  tags?: string[];
  existingImageUrls?: string[]; // 수정 시 유지할 기존 이미지 URL 목록
};

type GetCommentsParams = {
  productId: number;
  cursor?: number;
  take?: number;
};

export const getProducts = ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}: ListQueryParams = {}) => {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    orderBy,
    keyword,
  });
  return api.get<ProductListResponse>(`/products?${params}`);
};

export const getProduct = (id: number) =>
  api.get<ProductResponse>(`/products/${id}`, { cache: `no-store` });

export const createProduct = (
  data: CreateProductBody,
  imageFiles: File[] = [],
) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("price", String(data.price));
  formData.append("tags", JSON.stringify(data.tags));

  imageFiles.forEach((file) => formData.append("images", file));

  return api.post<ProductResponse>(`/products`, formData);
};

export const updateProduct = (
  id: number,
  fields: UpdateProductBody,
  newImageFiles: File[] = [],
) => {
  const formData = new FormData();

  if (fields.name !== undefined) {
    formData.append("name", fields.name);
  }
  if (fields.description !== undefined) {
    formData.append("description", fields.description);
  }
  if (fields.price !== undefined) {
    formData.append("price", String(fields.price));
  }
  if (fields.tags !== undefined) {
    formData.append("tags", JSON.stringify(fields.tags));
  }

  // 수정 화면에서 삭제하지 않은 기존 이미지 URL들 (없으면 빈 배열로 보내서 전부 삭제 처리)
  formData.append(
    "existingImageUrls",
    JSON.stringify(fields.existingImageUrls ?? []),
  );

  newImageFiles.forEach((file) => formData.append("images", file));

  return api.patch<ProductResponse, FormData>(`/products/${id}`, formData);
};

export const deleteProduct = (id: number) =>
  api.delete<void>(`/products/${id}`);

export const getProductComments = ({
  productId,
  cursor,
  take = 10,
}: GetCommentsParams) => {
  const params = new URLSearchParams({ take: String(take) });

  if (cursor !== undefined) {
    params.append("cursor", String(cursor));
  }

  return api.get<CommentListResponse>(
    `/products/${productId}/comments?${params}`,
  );
};

export const createProductComment = (productId: number, content: string) =>
  api.post<CommentResponse, CreateCommentBody>(
    `/products/${productId}/comments`,
    { content },
  );

export const addProductFavorite = (productId: number) =>
  api.post<FavoriteResponse, undefined>(
    `/products/${productId}/favorite`,
    undefined,
  );

export const removeProductFavorite = (productId: number) =>
  api.delete<void>(`/products/${productId}/favorite`);

// 추가/삭제가 별도 엔드포인트이므로 nextLiked 값을 기준으로 내부에서 분기
export const toggleProductFavorite = (productId: number, nextLiked: boolean) =>
  nextLiked ? addProductFavorite(productId) : removeProductFavorite(productId);
