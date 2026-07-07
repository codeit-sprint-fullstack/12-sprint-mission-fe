export type ListQueryParams = {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
};

export type SortOption = {
  value: string;
  label: string;
};

export type SectionHeaderProps = {
  keyword: string;
  orderBy: string;
};
