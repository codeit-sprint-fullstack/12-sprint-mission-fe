const BASE_URL = "https://panda-market-api-crud.vercel.app";

// -------------------------------------------
//             게시글 목록 CRUD
// -------------------------------------------
// 1. 게시글 목록 조회하기
async function getArticelList(page, pageSize, keyword) {
  try {
    const response = !keyword
      ? await fetch(`${BASE_URL}/articles?page=${page}&pageSize=${pageSize}`)
      : await fetch(
          `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
        );

    if (!response.ok) {
      throw new Error("데이터 로드 실패");
    }

    const articleList = await response.json();
    console.log("1. 게시글 목록 조회 => ", articleList);
  } catch (error) {
    console.error(error);
  }
}

// 2. 게시글 상세 조회하기 (then, catch 사용)
function getArticle(id) {
  fetch(`${BASE_URL}/articles/${id}`)
    .then((response) => response.json())
    .then((article) => console.log("2. 게시글 상세 조회 => ", article))
    .catch((error) => console.error(error));
}

// 2. 게시글 상세 조회하기 (async/await 사용)
// async function getArticle(id) {
//   try {
//     const response = await fetch(`${BASE_URL}/articles/${id}`);
//     if (!response.ok) {
//       throw new Error("데이터 로드 실패");
//     }

//     const article = await response.json();
//     console.log("2. 게시글 상세 조회 => ", article);
//   } catch (error) {
//     console.error(error);
//   }
// }

// 3. 게시글 작성하기
async function createArticle(title, content, image) {
  const newArticle = {
    title,
    content,
    image,
  };

  try {
    const response = await fetch(`${BASE_URL}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArticle),
    });

    if (!response.ok) {
      throw new Error("게시글 생성 실패");
    }

    const createdArticle = await response.json();
    console.log("3. 게시글 작성 => ", createdArticle);
  } catch (error) {
    console.error(error);
  }
}

// 4. 게시글 수정하기
async function patchArticle(id, title, content, image) {
  const updatedArticle = {
    title,
    content,
    image,
  };

  try {
    const response = await fetch(`${BASE_URL}/articles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedArticle),
    });

    if (!response.ok) {
      throw new Error("게시글 수정 실패");
    }

    const patchedArticle = await response.json();
    console.log("4. 게시글 수정 => ", patchedArticle);
  } catch (error) {
    console.error(error);
  }
}

// 5. 게시글 삭제하기
async function deleteArticle(id) {
  try {
    const response = await fetch(`${BASE_URL}/articles/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("게시글 삭제 실패");
    }

    const deletedArticle = await response.json();
    console.log("5. 게시글 삭제 => ", deletedArticle);
  } catch (error) {
    console.error(error);
  }
}

// -------------------------------------------
//             상품 목록 CRUD
// -------------------------------------------
// 1. 상품 목록 조회하기
async function getProductList(page, pageSize, keyword) {
  try {
    const response = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );

    if (!response.ok) {
      throw new Error("데이터 로드 실패");
    }

    const productList = await response.json();
    console.log("1. 상품 목록 조회 => ", productList);
  } catch (error) {
    console.error("로드 에러: ", error);
  }
}

// 2. 상품 상세 조회하기
async function getProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error("데이터 로드 실패");
    }

    const product = await response.json();
    console.log("2. 상품 상세 조회 => ", product);
  } catch (error) {
    console.error("로드 에러: ", error);
  }
}

// 3. 상품 작성하기
async function createProduct(name, description, price, tags, images) {
  const newProduct = {
    name,
    description,
    price,
    tags,
    images,
  };

  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error("상품 생성 실패");
    }

    const createdProduct = await response.json();
    console.log("3. 상품 작성 => ", createdProduct);
  } catch (error) {
    console.error("생성 에러:", error);
  }
}

// 4. 상품 수정하기
async function patchProduct(id, name, description, price, tags, images) {
  const updatedProduct = {
    name,
    description,
    price,
    tags,
    images,
  };
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    if (!response.ok) {
      throw new Error("상품 수정 실패");
    }

    const patchedProduct = await response.json();
    console.log("4. 상품 수정 => ", patchedProduct);
  } catch (error) {
    console.error("수정 에러:", error);
  }
}

// 5. 상품 삭제하기
async function deleteProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("상품 삭제 실패");
    }

    const deletedProduct = await response.json();
    console.log("5. 상품 삭제 => ", deletedProduct);
  } catch (error) {
    console.error("삭제 에러:", error);
  }
}

// -------------------------------------------
//             테스트용 실행함수
// -------------------------------------------
// function testRun() {
//   getArticelList(1, 5);
//   getArticelList(1, 5, "테스트");
//   getArticle(5550);
//   createArticle(
//     "iRum 테스트 게시글",
//     "iRum님의 테스트 게시글입니다!",
//     "https://picsum.photos/200",
//   );
//   patchArticle(
//     5561,
//     "iRum 테스트 게시글 수정본",
//     "iRum님의 테스트 게시글을 수정했습니다!",
//     "https://picsum.photos/300",
//   );
//   deleteArticle(5560);
// }
// testRun();
