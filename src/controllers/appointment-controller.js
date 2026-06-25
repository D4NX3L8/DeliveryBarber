import Appointment from "../models/appointment-model.js";
import { getData, saveData } from "../utils/localstorage.js";
import { getAvailability, getDayOffs } from "./availability-controller.js";

//Crear cita
export function createAppointment(
  clientId,
  clientName,
  barberId,
  barberName,
  service,
  date,
  time,
  address,
) {
  const appointments = getData("appointments");

  const appointment = new Appointment(
    Date.now(),
    clientId,
    clientName,
    barberId,
    barberName,
    service,
    date,
    time,
    address,
  );

  appointments.push(appointment);

  saveData("appointments", appointments);

  return appointment;
}

//Obtener todas las citas
export function getAppointments() {
  return getData("appointments");
}

//Obtener citas de un cliente
export function getClientAppointments(clientId) {
  const appointments = getData("appointments");

  return appointments.filter(
    (appointment) => appointment.clientId === clientId,
  );
}

//Cancelar cita
export function cancelAppointment(id) {
  const appointments = getData("appointments");

  const appointment = appointments.find((appointment) => appointment.id === id);

  if (!appointment) {
    return;
  }

  appointment.status = "cancelled";

  saveData("appointments", appointments);
}

//Aceptar cita
export function acceptAppointment(id) {
  const appointments = getData("appointments");

  const appointment = appointments.find((appointment) => appointment.id === id);

  if (!appointment) {
    return false;
  }

  const conflict = appointments.some(
    (item) =>
      item.id !== appointment.id &&
      item.barberId === appointment.barberId &&
      item.date === appointment.date &&
      item.time === appointment.time &&
      item.status === "accepted",
  );

  if (conflict) {
    return false;
  }

  appointment.status = "accepted";

  saveData("appointments", appointments);

  return true;
}

//Rechazar cita
export function rejectAppointment(id) {
  const appointments = getData("appointments");

  const appointment = appointments.find((appointment) => appointment.id === id);

  if (!appointment) {
    return;
  }

  appointment.status = "rejected";

  saveData("appointments", appointments);
}

//Completar cita
export function completeAppointment(id) {
  const appointments = getData("appointments");

  const appointment = appointments.find((appointment) => appointment.id === id);

  if (!appointment) {
    return;
  }

  appointment.status = "completed";

  saveData("appointments", appointments);
}

//Obtiene las citas de un barbero
export function getBarberAppointments(barberId) {
  const appointments = getData("appointments");

  return appointments.filter(
    (appointment) => appointment.barberId === barberId,
  );
}

//Elimina usuarios.
export function deleteAppointment(id) {
  const appointments = getData("appointments");

  const updatedAppointments = appointments.filter(
    (appointment) => appointment.id !== id,
  );

  saveData("appointments", updatedAppointments);
}
//Verifica si hay fechs y horas ocupadas en el agendamiento de citas.
export function isTimeSlotOccupied(barberId, date, time) {
  const appointments = getData("appointments");

  return appointments.some(
    (appointment) =>
      appointment.barberId === barberId &&
      appointment.date === date &&
      appointment.time === time &&
      appointment.status === "accepted",
  );
}

//Verifica si la hora está dentro del horario laboral
export function isWithinWorkingHours(
    barberId,
    time
) {

    const availability =
        getAvailability(
            barberId
        );

    if (
        !availability ||
        !availability.startTime ||
        !availability.endTime
    ) {
        return false;
    }

    return (
        time >= availability.startTime &&
        time <= availability.endTime
    );

}


//Verifica si el barbero tiene día libre
export function isDayOff(
    barberId,
    date
) {

    const daysOff =
        getDayOffs(
            barberId
        );

    return daysOff.some(
        day =>
            day.date === date
    );
}

export function getAvailableHours(
    barberId,
    date
) {
    if (!barberId || !date) {
        return [];
    }

    const availability = getAvailability(barberId);

    if (
        !availability ||
        !availability.startTime ||
        !availability.endTime
    ) {
        return [];
    }

    if (isDayOff(barberId, date)) {
        return [];
    }

    const appointments = getData("appointments");

    const occupiedHours = appointments
        .filter(
            (appointment) =>
                appointment.barberId === barberId &&
                appointment.date === date &&
                appointment.status === "accepted",
        )
        .map((appointment) => appointment.time);

    return generateTimeSlots(
        availability.startTime,
        availability.endTime,
    ).filter((hour) => !occupiedHours.includes(hour));
}

export function generateTimeSlots(
    startTime,
    endTime
) {
    if (!startTime || !endTime) {
        return [];
    }

    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    if (
        Number.isNaN(startHour) ||
        Number.isNaN(startMinute) ||
        Number.isNaN(endHour) ||
        Number.isNaN(endMinute)
    ) {
        return [];
    }

    const current = new Date();
    current.setHours(startHour, startMinute, 0, 0);

    const end = new Date();
    end.setHours(endHour, endMinute, 0, 0);

    if (current > end) {
        return [];
    }

    const slots = [];

    while (current <= end) {
        slots.push(current.toTimeString().slice(0, 5));
        current.setHours(current.getHours() + 1);
    }

    return slots;
}
