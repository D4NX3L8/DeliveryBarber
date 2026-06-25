import { getPurchases } from "../../../src/controllers/purchase-controller.js";
import { getUsers } from "../../../src/controllers/user-controller.js";
import { getProducts } from "../../../src/controllers/product-controller.js";

const container = document.getElementById("purchasesContainer");

function getUserName(userId) {
  const users = getUsers();
  const user = users.find((user) => user.id === userId);
  return user ? user.name : "Cliente desconocido";
}

function getProductDetails(productId) {
  const products = getProducts();
  return products.find((product) => product.id === productId) || { name: "Producto desconocido" };
}

function renderPurchases() {
  const purchases = getPurchases();

  if (purchases.length === 0) {
    container.innerHTML = `
      <p>No hay compras registradas.</p>
    `;
    return;
  }

  container.innerHTML = "";

  purchases.forEach((purchase) => {
    const productsHTML = purchase.products
      .map((item) => {
        const product = getProductDetails(item.productId);
        return `
          <li class="purchaseProductItem">
            <span class="productName">${product.name}</span>
            <span class="productQuantity">Cantidad: ${item.quantity}</span>
          </li>
        `;
      })
      .join("");

    container.innerHTML += `
      <section class="purchaseCard" id="purchase-${purchase.id}">
        <div class="purchaseHeader">
          <h2>Compra</h2>
          <p class="purchaseDate">Fecha: ${purchase.date}</p>
        </div>

        <p class="purchaseClient">Cliente: ${getUserName(purchase.userId)}</p>

        <div class="purchaseProducts">
          <h3>Productos comprados</h3>
          <ul class="purchaseProductList">
            ${productsHTML}
          </ul>
        </div>

        <p class="purchaseTotal">Total de la compra: $${purchase.total}</p>
      </section>
    `;
  });
}

renderPurchases();
window.addEventListener("storage", renderPurchases);
window.addEventListener("focus", renderPurchases);
