import {
  saveAvailability,
  getAvailability,
  addDayOff,
  getDayOffs,
  deleteDayOff,
} from "../../../src/controllers/availability-controller.js";

import {
  getBarberAppointments,
} from "../../../src/controllers/appointment-controller.js";

import { getCurrentUser } from "../../../src/controllers/user-controller.js";
import { showSuccess } from "../../../src/utils/alerts.js";

const user = getCurrentUser();
const scheduleForm = document.getElementById("scheduleForm");
const dayOffForm = document.getElementById("dayOffForm");
const daysOffContainer = document.getElementById("daysOffContainer");
const availabilityCalendar = document.getElementById("availabilityCalendar");

loadAvailability();

renderDaysOff();

renderAvailabilityCalendar();

//Guardar horario laboral
scheduleForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const startTime = document.getElementById("startTime").value;

  const endTime = document.getElementById("endTime").value;

  saveAvailability(user.id, startTime, endTime);

  showSuccess("Horario guardado correctamente");
});

//Agregar día libre
dayOffForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const date = document.getElementById("dayOffDate").value;

  addDayOff(user.id, date);

  showSuccess("Día de descanso agregado").then(() => {
    location.reload();
  });
});

//Mostrar horario guardado
function loadAvailability() {
  const availability = getAvailability(user.id);

  console.log("Availability:", availability);

  if (
    !availability ||
    Array.isArray(availability) ||
    !availability.startTime ||
    !availability.endTime
  ) {
    return;
  }

  document.getElementById("startTime").value =
    availability.startTime;

  document.getElementById("endTime").value =
    availability.endTime;
}

//Mostrar días libres
function renderDaysOff() {
  const daysOff = getDayOffs(user.id);

  if (daysOff.length === 0) {
    daysOffContainer.innerHTML = `
            <p>
                No tienes días de descanso registrados.
            </p>
        `;

    return;
  }

  daysOffContainer.innerHTML = "";

  daysOff.forEach((day) => {
    daysOffContainer.innerHTML += `

                <div>

                    <p>
                        ${day.date}
                    </p>

                    <button
                        class="deleteBtn"
                        data-id="${day.id}">
                        Eliminar
                    </button>

                </div>

                <hr>

            `;
  });

  const deleteButtons = document.querySelectorAll(".deleteBtn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      deleteDayOff(Number(button.dataset.id));

      location.reload();
    });
  });
}

function renderAvailabilityCalendar() {
  if (!availabilityCalendar) {
    return;
  }

  const availability = getAvailability(user.id);
  const daysOff = getDayOffs(user.id).map((day) => day.date);
  const appointments = getBarberAppointments(user.id);
  const occupiedDates = new Set(
    appointments
      .filter((appointment) => appointment.status === "accepted")
      .map((appointment) => appointment.date),
  );

  const today = new Date();
  const daysToShow = 14;

  availabilityCalendar.innerHTML = "";

  for (let index = 0; index < daysToShow; index += 1) {
    const current = new Date(today);
    current.setDate(current.getDate() + index);

    const date = current.toISOString().slice(0, 10);
    let status = "Disponible";

    if (daysOff.includes(date)) {
      status = "Descanso";
    } else if (occupiedDates.has(date)) {
      status = "Ocupado";
    } else if (
      !availability ||
      !availability.startTime ||
      !availability.endTime
    ) {
      status = "Sin horario";
    }

    availabilityCalendar.innerHTML += `
      <div>
        <strong>${date}</strong> - ${status}
      </div>
    `;
  }
}
