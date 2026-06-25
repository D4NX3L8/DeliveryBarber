import {
  createAppointment,
  isTimeSlotOccupied,
} from "../../../src/controllers/appointment-controller.js";

import { getUsers, getCurrentUser } from "../../../src/controllers/user-controller.js";

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

  showLoading("Creando cita...");

  const barberId = Number(barberSelect.value);

  const selectedBarber = barbers.find((barber) => barber.id === barberId);

  const barberName = selectedBarber.name;

  const occupied = isTimeSlotOccupied(barberId, date, time);

  if (occupied) {
    closeLoading();

    showError("Ese horario ya se encuentra ocupado.");

    return;
  }

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
