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

        <div class="productMeta">
          <p>Producto ID: ${product.id}</p>
          <p class="${inventory.className}" id="inventoryStatus-${product.id}">${inventory.label}</p>
        </div>

        <div class="productImageWrapper">
          <img src="${product.image}" alt="Imagen ${product.name}" class="productImage" />
        </div>

        <label for="name-${product.id}">Nombre</label>
        <input id="name-${product.id}" type="text" value="${product.name}" />

        <label for="price-${product.id}">Precio</label>
        <input id="price-${product.id}" type="number" value="${product.price}" />

        <label for="stock-${product.id}">Stock</label>
        <input id="stock-${product.id}" type="number" value="${product.stock}" />

        <label for="image-${product.id}">Imagen</label>
        <input id="image-${product.id}" type="text" value="${product.image}" />

        <div class="productActions">
          <button class="updateBtn" data-id="${product.id}">Guardar</button>
          <button class="deleteBtn" data-id="${product.id}">Eliminar</button>
        </div>
      </section>
      <hr />
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
