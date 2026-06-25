import {
    getBarberAppointments
} from "../../../src/controllers/appointment-controller.js";

import {
    getCurrentUser
} from "../../../src/controllers/user-controller.js";

const user =
    getCurrentUser();

const historyContainer =
    document.getElementById(
        "historyContainer"
    );

const appointments =
    getBarberAppointments(
        user.id
    );

const completedAppointments =
    appointments.filter(
        appointment =>
            appointment.status ===
            "completed"
    );

if (
    completedAppointments.length === 0
) {

    historyContainer.innerHTML = `
        <p>
            No tienes citas completadas.
        </p>
    `;

}

completedAppointments.forEach(
    (appointment) => {

        historyContainer.innerHTML += `

            <div>

                <h3>
                    ${appointment.service}
                </h3>

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

            </div>

            <hr>

        `;

    }
);