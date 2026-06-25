const STORAGE_KEY = "purchases";

export function getPurchases() {
    return JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    ) || [];
}

export function savePurchases(purchases) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(purchases)
    );
}