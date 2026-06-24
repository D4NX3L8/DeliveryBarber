import {
    getAppointments,
    deleteAppointment
} from "../../../src/controllers/appointment-controller.js";
import {
    showLoading,
    closeLoading,
    showSuccess,
} from "../../../src/utils/alerts.js";

const appointmentsContainer =
    document.getElementById(
        "appointmentsContainer"
    );

const appointments =
    getAppointments();

if (appointments.length === 0) {

    appointmentsContainer.innerHTML = `
        <p>
            No hay citas registradas.
        </p>
    `;

}

appointments.forEach((appointment) => {

    appointmentsContainer.innerHTML += `

        <div>

            <h3>
                ${appointment.service}
            </h3>

            <p>
                Cliente:
                ${appointment.clientName}
            </p>

            <p>
                Barbero:
                ${appointment.barberName}
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
                Estado:
                ${appointment.status}
            </p>

            <button
                class="deleteBtn"
                data-id="${appointment.id}">
                Eliminar
            </button>

        </div>

        <hr>

    `;

});

const deleteButtons =
    document.querySelectorAll(".deleteBtn");

deleteButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const id =
            Number(button.dataset.id);

        showLoading("Eliminando cita...");
        deleteAppointment(id);
        closeLoading();
        showSuccess("Cita eliminada").then(() => {
            location.reload();
        });

    });

});