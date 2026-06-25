import { getProducts } from "../../../src/controllers/product-controller.js";

import { addToCart } from "../../../src/controllers/cart-controller.js";

import { showSuccess } from "../../../src/utils/alerts.js";

const container = document.getElementById("productsContainer");

const products = getProducts();

if (products.length === 0) {
  container.innerHTML = `
    <p>
      No hay productos disponibles.
    </p>
  `;
}

products.forEach((product) => {
  container.innerHTML += `

  <div>

    <img
      src="${product.image}"
      alt="${product.name}"
      width="200">

    <h3>
      ${product.name}
    </h3>

    <p>
      Precio:
      $${product.price}
    </p>

    <p>
      Stock:
      ${product.stock}
    </p>

    ${
  product.stock > 0
    ? `
      <button
        class="addBtn"
        data-id="${product.id}">
        Agregar al carrito
      </button>
    `
    : `
      <button disabled>
        Sin stock
      </button>
    `
}

  </div>

  <hr>
  `;
  
});

const addButtons = document.querySelectorAll(".addBtn");

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = Number(button.dataset.id);

    addToCart(productId);

    showSuccess("Producto agregado al carrito");
  });
});
