import { getUserPurchases } from "../../../src/controllers/purchase-controller.js";

import { getCurrentUser } from "../../../src/controllers/user-controller.js";

const container = document.getElementById("historyContainer");

const user = getCurrentUser();

const purchases = getUserPurchases(user.id);

if (purchases.length === 0) {
  container.innerHTML = `
    <p>
      No tienes compras registradas.
    </p>
  `;
}

purchases.forEach((purchase) => {
  let productsHTML = "";

  purchase.products.forEach((product) => {
    productsHTML += `
          <li>
            Producto ID:
            ${product.productId}
            | Cantidad:
            ${product.quantity}
          </li>
        `;
  });

  container.innerHTML += `

      <div>

        <h3>
          Compra
        </h3>

        <p>
          Fecha:
          ${purchase.date}
        </p>

        <p>
          Productos:
        </p>

        <ul>
          ${productsHTML}
        </ul>

        <p>
          Total:
          $${purchase.total}
        </p>

      </div>

      <hr>

    `;
});
