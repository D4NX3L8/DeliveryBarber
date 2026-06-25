export function createPurchase(
    userId,
    products,
    total
) {

    const purchases = getPurchases();

    purchases.push({
        id: crypto.randomUUID(),
        userId,
        date: new Date().toLocaleDateString(),
        products,
        total
    });

    savePurchases(purchases);
}