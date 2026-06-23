import {
  getCurrentUser,
  getUsers,
} from "../../../src/controllers/user-controller.js";

import { getAppointments } from "../../../src/controllers/appointment-controller.js";

const user = getCurrentUser();

const welcomeMessage = document.getElementById("welcomeMessage");

const usersCount = document.getElementById("usersCount");

const clientsCount = document.getElementById("clientsCount");

const barbersCount = document.getElementById("barbersCount");

const appointmentsCount = document.getElementById("appointmentsCount");

welcomeMessage.textContent = `Bienvenido ${user.name}`;

const users = getUsers();

const appointments = getAppointments();

usersCount.textContent = users.length;

const clients = users.filter((user) => user.role === "client");

clientsCount.textContent = clients.length;

const barbers = users.filter((user) => user.role === "barber");

barbersCount.textContent = barbers.length;

appointmentsCount.textContent = appointments.length;
