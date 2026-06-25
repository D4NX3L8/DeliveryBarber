/* crear servicio */
export function createService(data) {

    const services = getServices();

    const service = {
        id: crypto.randomUUID(),
        ...data
    };

    services.push(service);

    saveServices(services);

    return service;
}

/* obtener todos */
export function getAllServices() {
    return getServices();
}

/* editar */
export function updateService(id, data) {

    const services = getServices();

    const index = services.findIndex(
        service => service.id === id
    );

    if (index === -1) return false;

    services[index] = {
        ...services[index],
        ...data
    };

    saveServices(services);

    return true;
}

/* eliminar */
export function deleteService(id) {

    const services = getServices().filter(
        service => service.id !== id
    );

    saveServices(services);
}