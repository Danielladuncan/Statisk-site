"use strict";
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const productContainer = document.querySelector("main");
console.log(productContainer);

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=52`).then((res) =>
  res.json().then((data) => {
    showProducts(data);
  }),
);

function showProducts(dataArr) {
  console.log();
  productContainer.innerHTML += `<h2>${category}</h2>`;
  dataArr.forEach((product) => {
    productContainer.innerHTML += `<article class="smallProduct ${product.soldout ? "soldout" : ""} ${product.discount ? "discounted" : ""}">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
        <h3>${product.productdisplayname}</h3>
        <p class="subtitle">${product.brandname}</p>
        <p class="price">DKK <span>${product.price}</span>,-</p>
        <div class="sale">
          <p>NOW DKK <span>${Math.round(product.price * (1 - product.discount / 100))}</span>,-</p>
          <p><span>${product.discount}<span>%</p>
        </div>
        <a href="produkt.html?id=${product.id}">Read more</a>
      </article>`;
  });
}

//  if (product.soldout) {
//       console.log("product status: Udsolgt");
//     } else {
//       console.log("product status: På lager");
//     }

//     product.soldout ? console.log("product status: Udsolgt") : console.log("product status: På lager");
