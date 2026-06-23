import {
    getBarberAppointments,
    acceptAppointment,
    rejectAppointment,
    completeAppointment
} from "../../../src/controllers/appointment-controller.js";

import {
    getCurrentUser
} from "../../../src/controllers/user-controller.js";

const user = getCurrentUser();

const appointmentsContainer =
    document.getElementById("appointmentsContainer");

const appointments =
    getBarberAppointments(user.id);

if (appointments.length === 0) {

    appointmentsContainer.innerHTML = `
        <p>No tienes citas asignadas.</p>
    `;

}

appointments.forEach((appointment) => {

    let actions = "";

    if (appointment.status === "pending") {

        actions = `
            <button
                class="acceptBtn"
                data-id="${appointment.id}">
                Aceptar
            </button>

            <button
                class="rejectBtn"
                data-id="${appointment.id}">
                Rechazar
            </button>
        `;

    }

    if (appointment.status === "accepted") {

        actions = `
            <button
                class="completeBtn"
                data-id="${appointment.id}">
                Completar
            </button>
        `;

    }

    appointmentsContainer.innerHTML += `

        <div>

            <h3>${appointment.service}</h3>

            <p>
                Cliente:
                ${appointment.clientName}
            </p>

            <p>
                Fecha:
                ${appointment.date}
            </p>

            <p>
                Hora:
                ${appointment.time}
            </p>

            <p>
                Dirección:
                ${appointment.address}
            </p>

            <p>
                Estado:
                ${appointment.status}
            </p>

            ${actions}

        </div>

    `;

});

const acceptButtons =
    document.querySelectorAll(".acceptBtn");

acceptButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const id =
            Number(button.dataset.id);

        acceptAppointment(id);

        location.reload();

    });

});

const rejectButtons =
    document.querySelectorAll(".rejectBtn");

rejectButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const id =
            Number(button.dataset.id);

        rejectAppointment(id);

        location.reload();

    });

});

const completeButtons =
    document.querySelectorAll(".completeBtn");

completeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const id =
            Number(button.dataset.id);

        completeAppointment(id);

        location.reload();

    });

});