// async/await 을 이용하여 비동기 처리를 해주세요.
// try/catch 를 이용하여 오류 처리를 해주세요
const SRC_URL = "https://panda-market-api-crud.vercel.app/products";

export async function getProductList(page, pageSize, keyword) {
  // GET 메서드를 사용해 주세요.
  try {
    const res = await fetch(
      `${SRC_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );

    if (res.ok) {
      return await res.json();
    } else {
      console.error(`데이터 에러: 상태 코드 ${res.status}`);
      return null;
    }
  } catch (error) {
    console.error(`네트워크 에러: ${error.message}`);
    return null;
  }
}

export async function getProduct(productID) {
  // GET 메서드를 사용해 주세요.
  try {
    const res = await fetch(`${SRC_URL}/${productID}`);

    if (res.ok) {
      return await res.json();
    } else {
      console.error(`데이터 에러: 상태 코드 ${res.status}`);
      return null;
    }
  } catch (error) {
    console.error(`네트워크 에러: ${error.message}`);
    return null;
  }
}

export async function createProduct(name, description, price, tags, images) {
  //POST 메서드를 사용해 주세요.
  // request body에 name, description, price, tags, images 를 포함
  try {
    const res = await fetch(SRC_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        price,
        tags,
        images,
      }),
    });

    if (res.ok) {
      return await res.json();
    } else {
      console.error(`데이터 에러: 상태 코드 ${res.status}`);
      return null;
    }
  } catch (error) {
    console.error(`네트워크 에러: ${error.message}`);
    return null;
  }
}

export async function patchProduct(
  productID,
  name,
  description,
  price,
  tags,
  images,
) {
  //PATCH 메서드를 사용해 주세요.
  try {
    const res = await fetch(`${SRC_URL}/${productID}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
        tags: tags,
        images: images,
      }),
    });

    if (res.ok) {
      return true;
    } else {
      console.error(`데이터 에러: 상태 코드 ${res.status}`);
      return false;
    }
  } catch (error) {
    console.error(`네트워크 에러: ${error.message}`);
    return false;
  }
}

export async function deleteProduct(productID) {
  //DELETE 메서드를 사용해 주세요.
  try {
    const res = await fetch(`${SRC_URL}/${productID}`, {
      method: "DELETE",
    });

    if (res.ok) {
      return true;
    } else {
      console.error(`데이터 에러: 상태 코드 ${res.status}`);
      return false;
    }
  } catch (error) {
    console.error(`네트워크 에러: ${error.message}`);
    return false;
  }
}
