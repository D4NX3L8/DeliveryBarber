import {
  createAppointment,
  getAvailableHours,
  getClientAppointments,
  isTimeSlotOccupied,
  isWithinWorkingHours,
  isDayOff,
} from "../../../src/controllers/appointment-controller.js";

import {
  getUsers,
  getCurrentUser,
} from "../../../src/controllers/user-controller.js";

import {
  validateDate,
  validateTime,
  validateAddress,
} from "../../../src/utils/validators.js";

import {
  showLoading,
  closeLoading,
  showSuccess,
  showError,
} from "../../../src/utils/alerts.js";

const appointmentForm = document.getElementById("appointmentForm");
const barberSelect = document.getElementById("barber");
const dateInput = document.getElementById("date");
const timeSelect = document.getElementById("time");
const appointmentFilter = document.getElementById("appointmentFilter");
const appointmentHistoryContainer = document.getElementById("appointmentHistoryContainer");

const currentUser = getCurrentUser();
const barbers = getUsers().filter((user) => user.role === "barber");
const clientAppointments = currentUser ? getClientAppointments(currentUser.id) : [];

if (barbers.length === 0) {
  barberSelect.innerHTML = `
    <option value="">
      No hay barberos disponibles
    </option>
  `;
} else {
  barberSelect.innerHTML = `
      <option value="">
        Seleccione un barbero
      </option>
    `;

  barbers.forEach((barber) => {
    barberSelect.innerHTML += `
      <option
        value="${barber.id}">
        ${barber.name}
      </option>
    `;
  });
}

barberSelect.addEventListener("change", renderAvailableHours);
dateInput.addEventListener("change", renderAvailableHours);

function renderAvailableHours() {
  const barberId = Number(barberSelect.value);
  const date = dateInput.value;

  let options = `
      <option value="">
        Seleccione una hora
      </option>
    `;

  if (!barberId || !date) {
    timeSelect.innerHTML = options;
    return;
  }

  const availableHours = getAvailableHours(barberId, date);

  if (availableHours.length === 0) {
    options += `
      <option value="">
        No hay horas disponibles
      </option>
    `;
  } else {
    availableHours.forEach((hour) => {
      options += `
      <option value="${hour}">${hour}</option>
    `;
    });
  }

  timeSelect.innerHTML = options;
}

function renderClientAppointments(filter = "all") {
  if (!appointmentHistoryContainer) {
    return;
  }

  const filteredAppointments = clientAppointments.filter((appointment) =>
    filter === "all" ? true : appointment.status === filter,
  );

  if (filteredAppointments.length === 0) {
    appointmentHistoryContainer.innerHTML = `
      <p>No hay citas con ese estado.</p>
    `;
    return;
  }

  appointmentHistoryContainer.innerHTML = filteredAppointments
    .map(
      (appointment) => `
      <div>
        <p><strong>Servicio:</strong> ${appointment.service}</p>
        <p><strong>Barbero:</strong> ${appointment.barberName}</p>
        <p><strong>Fecha:</strong> ${appointment.date}</p>
        <p><strong>Hora:</strong> ${appointment.time}</p>
        <p><strong>Dirección:</strong> ${appointment.address}</p>
        <p><strong>Estado:</strong> ${appointment.status}</p>
      </div>
    `,
    )
    .join("");
}

appointmentFilter?.addEventListener("change", () => {
  renderClientAppointments(appointmentFilter.value);
});

renderClientAppointments();

appointmentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = getCurrentUser();

  const service = document.getElementById("service").value;

  const date = document.getElementById("date").value;

  const time = document.getElementById("time").value;

  const address = document.getElementById("address").value;

  const barberId = Number(barberSelect.value);

  if (!barberId) {
    showError("Debes seleccionar un barbero");

    return;
  }

  const selectedBarber = barbers.find((barber) => barber.id === barberId);

  const barberName = selectedBarber.name;

  const dateError = validateDate(date);

  if (dateError) {
    showError(dateError);

    return;
  }

  const timeError = validateTime(time);

  if (timeError) {
    showError(timeError);

    return;
  }

  const addressError = validateAddress(address);

  if (addressError) {
    showError(addressError);

    return;
  }

  if (!isWithinWorkingHours(barberId, time)) {
    showError(
      "La hora seleccionada está fuera del horario laboral del barbero",
    );

    return;
  }

  if (isDayOff(barberId, date)) {
    showError("El barbero no trabaja en esa fecha");

    return;
  }

  if (isTimeSlotOccupied(barberId, date, time)) {
    showError("Ese horario ya está ocupado");

    return;
  }

  showLoading("Creando cita...");

  const newAppointment = createAppointment(
    user.id,
    user.name,
    barberId,
    barberName,
    service,
    date,
    time,
    address,
  );

  if (newAppointment && currentUser) {
    clientAppointments.push(newAppointment);
  }

  closeLoading();

  showSuccess("Cita creada correctamente");

  appointmentForm.reset();
  renderAvailableHours();
  renderClientAppointments(appointmentFilter?.value || "all");
});
