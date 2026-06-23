import {
    getCurrentUser
} from "../../../src/controllers/user-controller.js";

import {
    getBarberAppointments
} from "../../../src/controllers/appointment-controller.js";

const user =
    getCurrentUser();

const welcomeMessage =
    document.getElementById("welcomeMessage");

const appointmentsCount =
    document.getElementById("appointmentsCount");

const pendingCount =
    document.getElementById("pendingCount");

welcomeMessage.textContent =
    `Bienvenido ${user.name}`;

const appointments =
    getBarberAppointments(user.id);

appointmentsCount.textContent =
    appointments.length;

const pendingAppointments =
    appointments.filter(
        appointment =>
            appointment.status === "pending"
    );

pendingCount.textContent =
    pendingAppointments.length;