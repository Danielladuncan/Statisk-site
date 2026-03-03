"use strict";

const productContainer = document.querySelector("main");
console.log(productContainer);

fetch("https://kea-alt-del.dk/t7/api/products").then((res) =>
  res.json().then((data) => {
    showProducts(data);
  }),
);

function showProducts(dataArr) {
  console.log();
  dataArr.forEach((product) => {
    productContainer.innerHTML += `<article smallProduct discounted>
        <div class="soldout_img">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
          <p class="soldout_text">SOLD OUT</p>
        </div>
        <h3>${product.productdisplayname}</h3>
        <p>${product.brandname}</p>
        <p>DKK <span>${product.price}</span>,-</p>
        <div>
          <p>NOW DKK <span ${Math.round(product.price * (1 - product.discount / 100))}</span></p>
          <p><span<${product.discount}<span>%</p>
        </div>
        <a href="produkt.html?id=${product.id}">Read more</a>
      </article>`;
  });
}
