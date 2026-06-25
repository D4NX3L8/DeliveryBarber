import { getCart, saveCart } from "../../../src/models/cart-model.js";

import { getProducts } from "../../../src/controllers/product-controller.js";

import { getCurrentUser } from "../../../src/controllers/user-controller.js";

import { createPurchase } from "../../../src/controllers/purchase-controller.js";

import { showSuccess } from "../../../src/utils/alerts.js";

const container = document.getElementById("cartContainer");

const totalElement = document.getElementById("cartTotal");

const checkoutBtn = document.getElementById("checkoutBtn");

renderCart();

function renderCart() {
  const cart = getCart();

  const products = getProducts();

  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = `
      <p>
        Tu carrito está vacío.
      </p>
    `;

    totalElement.textContent = "$0";

    return;
  }

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);

    if (!product) {
      return;
    }

    total += product.price * item.quantity;

    container.innerHTML += `

        <div>

          <h3>
            ${product.name}
          </h3>

          <p>
            Cantidad:
            ${item.quantity}
          </p>

          <p>
            Precio:
            $${product.price}
          </p>

        </div>

        <hr>

      `;
  });

  totalElement.textContent = `$${total}`;
}

checkoutBtn.addEventListener("click", () => {
  const user = getCurrentUser();

  const cart = getCart();

  const products = getProducts();

  let total = 0;

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);

    if (product) {
      total += product.price * item.quantity;
    }
  });

  createPurchase(user.id, cart, total);

  saveCart([]);

  showSuccess("Compra realizada correctamente").then(() => {
    location.reload();
  });
});
