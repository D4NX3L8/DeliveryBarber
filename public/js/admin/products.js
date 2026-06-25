import {
  createProduct,
  getProducts,
  deleteProduct,
} from "../../../src/controllers/product-controller.js";

import { showSuccess } from "../../../src/utils/alerts.js";

const form = document.getElementById("productForm");

const container = document.getElementById("productsContainer");

renderProducts();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;

  const price = Number(document.getElementById("price").value);

  const stock = Number(document.getElementById("stock").value);

  const image = document.getElementById("image").value;

  createProduct(name, price, stock, image);

  showSuccess("Producto creado").then(() => {
    location.reload();
  });
});

function renderProducts() {
  const products = getProducts();

  if (products.length === 0) {
    container.innerHTML = `
      <p>
        No hay productos registrados.
      </p>
    `;

    return;
  }

  products.forEach((product) => {
    container.innerHTML += `

        <div>

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

          <button
            class="deleteBtn"
            data-id="${product.id}">
            Eliminar
          </button>

        </div>

        <hr>

      `;
  });

  const deleteButtons = document.querySelectorAll(".deleteBtn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      deleteProduct(Number(button.dataset.id));

      location.reload();
    });
  });
}
