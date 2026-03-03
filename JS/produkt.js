const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const productContainer = document.querySelector("#productcontainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `<article class="produkt">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="" />
        <section>
          <h2>${data.productdisplayname}</h2>
          <div>
            <p>Type: ${data.articletype}</p>
            <p>Color: ${data.basecolour}</p>
            <p>Price: ${data.price},-</p>
          </div>
          <button>Buy now</button>
        </section>
        <section></section>
      </article>
      `;
  });
