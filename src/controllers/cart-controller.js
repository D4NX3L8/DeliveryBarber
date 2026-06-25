import {
    getCart,
    saveCart
} from "../models/cart-model.js";

/* agregar producto */
export function addToCart(productId) {

    const cart = getCart();

    const item = cart.find(
        p => p.productId === productId
    );

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            productId,
            quantity: 1
        });
    }

    saveCart(cart);
}

/* eliminar producto */
export function removeFromCart(productId) {

    const cart = getCart().filter(
        item => item.productId !== productId
    );

    saveCart(cart);
}

/* vaciar */
export function clearCart() {
    saveCart([]);
}

/* total */
export function getCartTotal(products) {

    const cart = getCart();

    let total = 0;

    cart.forEach(item => {

        const product = products.find(
            p => p.id === item.productId
        );

        if (product) {
            total +=
                product.price *
                item.quantity;
        }
    });

    return total;
}