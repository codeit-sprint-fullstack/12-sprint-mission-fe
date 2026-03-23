const BASIC_URL = "https://panda-market-api-crud.vercel.app/products";

export async function getProductList({
  page = 1,
  pageSize = 10,
  keyword = "",
  orderBy = "recent",
} = {}) {
  try {
    const response = await axios.get(BASIC_URL, {
      params: {
        page,
        pageSize,
        orderBy,
        keyword,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(id) {
  try {
    const response = await axios.get(`${BASIC_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createProduct(name, description, price, tags, images) {
  const data = {
    name,
    description,
    price,
    tags,
    images,
  };
  try {
    const response = await axios.post(BASIC_URL, data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function patchProduct(id, name, description, price, tags, images) {
  const data = {
    name,
    description,
    price,
    tags,
    images,
  };
  try {
    const response = await axios.patch(`${BASIC_URL}/${id}`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id) {
  try {
    const response = await axios.delete(`${BASIC_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
