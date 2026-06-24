import {
    getApplications,
    approveApplication,
    rejectApplication,
    deleteApplication,
} from "../../../src/controllers/application-controller.js";

import { updateUserRole } from "../../../src/controllers/user-controller.js";
import { showSuccess } from "../../../src/utils/alerts.js";

const applicationsContainer = document.getElementById("applicationsContainer");

const applications = getApplications();

if (applications.length === 0) {
    applicationsContainer.innerHTML = `
        <p>
            No hay solicitudes registradas.
        </p>
    `;
}

applications.forEach((application) => {
    applicationsContainer.innerHTML += `

        <div>

            <h3>
                ${application.name}
            </h3>

            <p>
                ${application.email}
            </p>

            <p>
                Experiencia:
                ${application.experience}
            </p>

            <p>
                Estado:
                ${application.status}
            </p>

            <button
                class="approveBtn"
                data-id="${application.id}"
                data-userid="${application.userId}">
                Aprobar
            </button>
            <button
                class="rejectBtn"
                data-id="${application.id}">
                Rechazar
            </button>

        </div>

        <hr>

    `;
});


const approveButtons =
    document.querySelectorAll(".approveBtn");

approveButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const applicationId =
            Number(button.dataset.id);

        const userId =
            Number(button.dataset.userid);

        showLoading("Procesando solicitud...");
        approveApplication(
            applicationId
        );

        updateUserRole(
            userId,
            "barber"
        );

        deleteApplication(
            applicationId
        );

        closeLoading();
        showSuccess(
            "Solicitud aprobada"
        ).then(() => {
            location.reload();
        });

    });

});

const rejectButtons =
    document.querySelectorAll(".rejectBtn");

rejectButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const applicationId =
            Number(button.dataset.id);

        showLoading("Procesando solicitud...");
        rejectApplication(
            applicationId
        );

        deleteApplication(
            applicationId
        );

        closeLoading();
        showSuccess(
            "Solicitud rechazada"
        ).then(() => {
            location.reload();
        });

    });

});