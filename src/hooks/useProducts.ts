import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { productService } from "../lib/productService";

// 1. 특정 상품 조회 (GET)
export const useGetProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => productService.getItem(id),
    enabled: !!id, // id가 있을 때만 요청
  });
};

// 2. 베스트 상품 목록 조회 (GET)
export const useGetBestProducts = () => {
  return useQuery({
    queryKey: ["products", "best"],
    queryFn: () => productService.getBestItems(),
  });
};

// 3. 상품 삭제 (DELETE)
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => productService.deleteItem(id),
    onSuccess: () => {
      // 삭제 성공 시 상품 목록 데이터를 다시 불러와서 최신화
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
