const STORAGE_KEY = "cart";

export function getCart() {
    return JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    ) || [];
}

export function saveCart(cart) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(cart)
    );
}