import { getPurchases, savePurchases } from "../models/purchase-model.js";

import { getProducts, saveProducts } from "../models/product-model.js";

export function createPurchase(userId, products, total) {
  const purchases = getPurchases();

  purchases.push({
    id: crypto.randomUUID(),
    userId,
    date: new Date().toLocaleDateString(),
    products,
    total,
  });

  savePurchases(purchases);

  const allProducts = getProducts();

  products.forEach((item) => {
    const product = allProducts.find((p) => p.id === item.productId);

    if (product) {
      product.stock = Math.max(0, product.stock - item.quantity);
    }
  });

  saveProducts(allProducts);
}
