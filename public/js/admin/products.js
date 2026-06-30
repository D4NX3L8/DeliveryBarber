import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../../../src/controllers/product-controller.js";

import { showSuccess } from "../../../src/utils/alerts.js";

const form = document.getElementById("productForm");
const container = document.getElementById("productsContainer");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const price = Number(document.getElementById("price").value);
  const stock = Number(document.getElementById("stock").value);
  const image = document.getElementById("image").value;

  createProduct(name, price, stock, image);

  showSuccess("Producto creado").then(() => {
    form.reset();
    renderProducts();
  });
});

function getInventoryStatus(stock) {
  if (stock === 0) {
    return { label: "Sin Stock", className: "inventoryStatus outOfStock" };
  }

  if (stock > 0 && stock <= 5) {
    return { label: "Stock Bajo", className: "inventoryStatus lowStock" };
  }

  return { label: "Disponible", className: "inventoryStatus available" };
}

function renderProducts() {
  const products = getProducts();

  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = `
      <p>No hay productos registrados.</p>
    `;
    return;
  }

  products.forEach((product) => {
    const inventory = getInventoryStatus(product.stock);

    container.innerHTML += `
      <section class="productCard" id="product-${product.id}">
        <h3>${product.name}</h3>

        <div class="admin-product-card card">

          <img src="${product.image}" alt="${product.name}">

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
          </div>

          <div class="product-actions">
            <button
              class="deleteBtn btn-secondary-outline"
              data-id="${product.id}">
              Eliminar
            </button>
          </div>

        </div>

      `;
  });

  const updateButtons = document.querySelectorAll(".updateBtn");
  const deleteButtons = document.querySelectorAll(".deleteBtn");

  updateButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = Number(button.dataset.id);
      const nameInput = document.getElementById(`name-${productId}`);
      const priceInput = document.getElementById(`price-${productId}`);
      const stockInput = document.getElementById(`stock-${productId}`);
      const imageInput = document.getElementById(`image-${productId}`);

      updateProduct(productId, {
        name: nameInput.value,
        price: Number(priceInput.value),
        stock: Number(stockInput.value),
        image: imageInput.value,
      });

      showSuccess("Producto actualizado").then(() => {
        renderProducts();
      });
    });
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      deleteProduct(Number(button.dataset.id));

      showSuccess("Producto eliminado").then(() => {
        renderProducts();
      });
    });
  });
}

renderProducts();
