import { notFound } from "next/navigation";

import type { ApiError } from "@/types/api";

export async function fetchOr404<T>(
  fetcher: () => Promise<{ data: T }>,
): Promise<T> {
  try {
    const { data } = await fetcher();
    return data;
  } catch (err) {
    if (err instanceof Error && (err as ApiError).status === 404) {
      notFound();
    }
    throw err;
  }
}
