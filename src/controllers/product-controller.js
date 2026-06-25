import {
  getProducts as getProductsStorage,
  saveProducts,
} from "../models/product-model.js";

//Crear producto
export function createProduct(name, price, stock, image) {
  const products = getProductsStorage();

  const product = {
    id: Date.now(),

    name,

    price,

    stock,

    image
  };

  products.push(product);

  saveProducts(products);

  return product;
}

//Obtener productos
export function getProducts() {
  return getProductsStorage();
}

//Actualizar producto
export function updateProduct(id, updatedData) {
  const products = getProductsStorage();

  const product = products.find((product) => product.id === id);

  if (!product) {
    return;
  }

  Object.assign(product, updatedData);

  saveProducts(products);
}

//Eliminar producto
export function deleteProduct(id) {
  const products = getProductsStorage();

  const updatedProducts = products.filter((product) => product.id !== id);

  saveProducts(updatedProducts);
}
