const BASIC_URL = "https://panda-market-api-crud.vercel.app/products";

export async function getProductList() {
  const page = 1;
  const pageSize = 10;
  const orderBy = "recent";
  const keyword = "";
  try {
    const response = await fetch(
      `${BASIC_URL}/?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
    );

    if (!response.ok) {
      console.log(`HTTP Error ${response.status}`);
      return;
    }

    const list = await response.json();
    return list;
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(id) {
  try {
    const response = await fetch(`${BASIC_URL}/${id}`);

    if (!response.ok) {
      console.log(`HTTP Error ${response.status}`);
      return;
    }

    const result = await response.json();
    return result;
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
    const response = await fetch(`${BASIC_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.log(`HTTP Error ${response.status}:`, result);
      return;
    }
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
    const response = await fetch(`${BASIC_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.log(`HTTP Error ${response.status}:`, result);
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id) {
  try {
    const response = await fetch(`${BASIC_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log(`HTTP Error ${response.status}:`, result);
      return;
    }
  } catch (error) {
    console.log(error);
  }
}
