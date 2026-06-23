import Application from "../models/application-model.js";

import {
    getData,
    saveData
} from "../utils/localstorage.js";

//Crear solicitud

export function createApplication(
    userId,
    name,
    email,
    experience
) {

    const applications =
        getData("applications");

    const application =
        new Application(
            Date.now(),
            userId,
            name,
            email,
            experience
        );

    applications.push(application);

    saveData(
        "applications",
        applications
    );

    return application;

}

//Obtener solicitudes

export function getApplications() {

    return getData("applications");

}

//Aprobar solicitud
export function approveApplication(id) {

    const applications =
        getData("applications");

    const application =
        applications.find(
            application =>
                application.id === id
        );

    if (!application) {
        return;
    }

    application.status =
        "approved";

    saveData(
        "applications",
        applications
    );

}

//Rechazar solicitud
export function rejectApplication(id) {

    const applications =
        getData("applications");

    const application =
        applications.find(
            application =>
                application.id === id
        );

    if (!application) {
        return;
    }

    application.status =
        "rejected";

    saveData(
        "applications",
        applications
    );

}

//Eliminar solicitud (Al momento de oprimir [Rechazar | Aceptar ] se quite la solicitud)
export function deleteApplication(id) {

    const applications =
        getData("applications");

    const updatedApplications =
        applications.filter(
            application =>
                application.id !== id
        );

    saveData(
        "applications",
        updatedApplications
    );

}