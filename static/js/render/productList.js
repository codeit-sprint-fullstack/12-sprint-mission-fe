export default function renderProductList(products) {
  const { list, totalCount } = products;

  const productList = document.getElementById("products");

  list.forEach((item) => {
    // const { name, price, images, ...rest } = item;
    const productItem = document.createElement("li");
    const productThumb = document.createElement("div");
    const productInfo = document.createElement("div");
    const productName = document.createElement("p");
    const productPrice = document.createElement("p");

    productItem.classList.add("product__item");
    productThumb.classList.add("item--thumb");
    productInfo.classList.add("item--info");
    productName.classList.add("item--name");
    productPrice.classList.add("item--price");

    // console.log(`${item.id} => `, item);

    const thumbnail =
      item.images.length && !item.images[0].includes("...")
        ? `<img src="${item.images[0]}" alt="${item.name}" />`
        : `<span>No Image</span>`;
    productThumb.innerHTML = thumbnail;
    productName.textContent = item.name;
    productPrice.textContent = item.price.toLocaleString() + "원";

    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productItem.appendChild(productThumb);
    productItem.appendChild(productInfo);
    productList.appendChild(productItem);
  });
}
