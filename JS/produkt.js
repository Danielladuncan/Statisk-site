const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const productContainer = document.querySelector("#productcontainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((product) => {
    productContainer.innerHTML = `<article class="produkt ${product.soldout ? "soldout" : ""} ${product.discount ? "discounted" : ""}">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="" />
        <section>
          <h2>${product.productdisplayname}</h2>
          <div>
            <p>Type: ${product.articletype}</p>
            <p>Color: ${product.basecolour}</p>
            <p class="price">Price: ${product.price},-</p>
          </div>
          <div class="sale">
            <p>NOW DKK <span>${Math.round(product.price * (1 - product.discount / 100))}</span>,-</p>
            <p><span>${product.discount}</span>%</p>
          </div>
          
          <button>Buy now</button>
        </section>
        <section></section>
      </article>
      `;
  });
