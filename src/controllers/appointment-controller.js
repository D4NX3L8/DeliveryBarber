import Appointment from "../models/appointment-model.js";
import { getData, saveData } from "../utils/localstorage.js";

//Crear cita
export function createAppointment(
    clientId,
    clientName,
    barberId,
    barberName,
    service,
    date,
    time,
    address
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
        address
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
        appointment => appointment.clientId === clientId
    );
}

//Cancelar cita
export function cancelAppointment(id) {

    const appointments = getData("appointments");

    const appointment = appointments.find(
        appointment => appointment.id === id
    );

    if (!appointment) {
        return;
    }

    appointment.status = "cancelled";

    saveData("appointments", appointments);
}

//Aceptar cita
export function acceptAppointment(id) {

    const appointments = getData("appointments");

    const appointment = appointments.find(
        appointment => appointment.id === id
    );

    if (!appointment) {
        return;
    }

    appointment.status = "accepted";

    saveData("appointments", appointments);
}

//Rechazar cita
export function rejectAppointment(id) {

    const appointments = getData("appointments");

    const appointment = appointments.find(
        appointment => appointment.id === id
    );

    if (!appointment) {
        return;
    }

    appointment.status = "rejected";

    saveData("appointments", appointments);
}

//Completar cita
export function completeAppointment(id) {

    const appointments = getData("appointments");

    const appointment = appointments.find(
        appointment => appointment.id === id
    );

    if (!appointment) {
        return;
    }

    appointment.status = "completed";

    saveData("appointments", appointments);
}

//Obtiene las citas de un barbero
export function getBarberAppointments(barberId) {

    const appointments =
        getData("appointments");

    return appointments.filter(
        appointment =>
            appointment.barberId === barberId
    );

}