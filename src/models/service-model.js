const STORAGE_KEY = "services";

export function getServices() {
    return JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    ) || [];
}

export function saveServices(services) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(services)
    );
}