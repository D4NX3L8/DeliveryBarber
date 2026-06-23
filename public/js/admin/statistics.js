import {
    getUsers
} from "../../../src/controllers/user-controller.js";

import {
    getAppointments
} from "../../../src/controllers/appointment-controller.js";

const users =
    getUsers();

const appointments =
    getAppointments();

//Usuarios

document.getElementById(
    "totalUsers"
).textContent =
    users.length;

//Clientes

document.getElementById(
    "totalClients"
).textContent =
    users.filter(
        user => user.role === "client"
    ).length;

//Barberos

document.getElementById(
    "totalBarbers"
).textContent =
    users.filter(
        user => user.role === "barber"
    ).length;

//Total citas

document.getElementById(
    "totalAppointments"
).textContent =
    appointments.length;

//Pendientes

document.getElementById(
    "pendingAppointments"
).textContent =
    appointments.filter(
        appointment =>
            appointment.status === "pending"
    ).length;

//Aceptadas

document.getElementById(
    "acceptedAppointments"
).textContent =
    appointments.filter(
        appointment =>
            appointment.status === "accepted"
    ).length;

//Completadas

document.getElementById(
    "completedAppointments"
).textContent =
    appointments.filter(
        appointment =>
            appointment.status === "completed"
    ).length;

//Canceladas

document.getElementById(
    "cancelledAppointments"
).textContent =
    appointments.filter(
        appointment =>
            appointment.status === "cancelled"
    ).length;