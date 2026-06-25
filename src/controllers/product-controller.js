/* obtener producto */
import {
    getProducts,
    saveProducts
} from "../models/product-model.js";

export function getAllProducts() {
    return getProducts();
}

/* crear producto */
export function createProduct(productData) {
    const products = getProducts();

    const newProduct = {
        id: crypto.randomUUID(),
        ...productData
    };

    products.push(newProduct);

    saveProducts(products);

    return newProduct;
}

/* buscar producto */
export function getProductById(id) {
    return getProducts().find(
        product => product.id === id
    );
}

/* editar producto */
export function updateProduct(id, data) {

    const products = getProducts();

    const index = products.findIndex(
        product => product.id === id
    );

    if (index === -1) return false;

    products[index] = {
        ...products[index],
        ...data
    };

    saveProducts(products);

    return true;
}

/* eliminar producto */
export function updateProduct(id, data) {

    const products = getProducts();

    const index = products.findIndex(
        product => product.id === id
    );

    if (index === -1) return false;

    products[index] = {
        ...products[index],
        ...data
    };

    saveProducts(products);

    return true;
}
