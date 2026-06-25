import Availability
    from "../models/availability-model.js";

import DayOff
    from "../models/dayoff-model.js";

import {
    getData,
    saveData
} from "../utils/localstorage.js";


//Guardar horario laboral
export function saveAvailability(
    barberId,
    startTime,
    endTime
) {

    const availability =
        new Availability(
            barberId,
            startTime,
            endTime
        );

    saveData(
        `availability_${barberId}`,
        availability
    );

}


//Obtener horario laboral
export function getAvailability(
    barberId
) {

    return getData(
        `availability_${barberId}`
    );

}


//Agregar día libre
export function addDayOff(
    barberId,
    date
) {

    const daysOff =
        getData("daysOff");

    daysOff.push(
        new DayOff(
            Date.now(),
            barberId,
            date
        )
    );

    saveData(
        "daysOff",
        daysOff
    );

}


//Obtener días libres
export function getDayOffs(
    barberId
) {

    const daysOff =
        getData(
            "daysOff"
        );

    return daysOff.filter(
        day =>
            day.barberId === barberId
    );

}


//Eliminar día libre
export function deleteDayOff(
    id
) {

    const daysOff =
        getData(
            "daysOff"
        );

    const updated =
        daysOff.filter(
            day =>
                day.id !== id
        );

    saveData(
        "daysOff",
        updated
    );

}