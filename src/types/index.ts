export type User = {
  email: string;
  nickname: string;
  image?: string[];
  id: number;
};

export type Product = {
  id: number;
  name: string;
  description: string | null;
  price: number;
  tags?: string[];
  favoriteCount: number;
  images?: string[];
};

export type Article = {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  id: number;
  writer?: User;
};

export type Comment = {
  createdAt: Date;
  updatedAt: Date;
  id: number;
  content: string;
  writer?: User;
};

// 1. 폼 데이터의 타입을 명시합니다.
export type SignUpFormValues = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
};

// 2. 모달 설정의 타입을 명시합니다.
export type ModalConfig = {
  isOpen: boolean;
  message: string;
  onCloseAction: (() => void) | null;
};

export type LoginFormValues = {
  email: string;
  password: string;
};
