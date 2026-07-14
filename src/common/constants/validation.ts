export const VALIDATION = {
  post: {
    titleMaxLength: 100,
  },

  product: {
    nameMaxLength: 100,
    descriptionMinLength: 10,
  },

  comment: {
    maxLength: 200,
  },

  image: {
    maxCount: 3,
  },
} as const;
