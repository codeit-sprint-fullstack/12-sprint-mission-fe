const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getImageUrl = (path: string | null | undefined) => {
  if (!path) return undefined;
  if (path.startsWith("http")) {
    return path;
  }
  return `${API_BASE_URL}${path}`;
};
