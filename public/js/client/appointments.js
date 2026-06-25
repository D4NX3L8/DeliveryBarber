import {
  createAppointment,
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

const barbers = getUsers().filter((user) => user.role === "barber");

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

  createAppointment(
    user.id,
    user.name,
    barberId,
    barberName,
    service,
    date,
    time,
    address,
  );

  closeLoading();

  showSuccess("Cita creada correctamente");

  appointmentForm.reset();
});
