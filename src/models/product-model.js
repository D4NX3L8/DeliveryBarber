const STORAGE_KEY = "products";

export function getProducts() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveProducts(products) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(products)
    );
}