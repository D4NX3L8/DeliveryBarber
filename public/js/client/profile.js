import {
    createAppointment
} from "../../../src/controllers/appointment-controller.js";

import {
    getCurrentUser
} from "../../../src/controllers/user-controller.js";

import {
    validateDate,
    validateTime,
    validateAddress
} from "../../../src/utils/validators.js";

import {
    showLoading,
    closeLoading,
    showSuccess,
    showError
} from "../../../src/utils/alerts.js";

const appointmentForm =
    document.getElementById(
        "appointmentForm"
    );

appointmentForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        const user =
            getCurrentUser();

        const service =
            document.getElementById(
                "service"
            ).value;

        const date =
            document.getElementById(
                "date"
            ).value;

        const time =
            document.getElementById(
                "time"
            ).value;

        const address =
            document.getElementById(
                "address"
            ).value;

        const dateError =
            validateDate(date);

        if (dateError) {

            showError(
                dateError
            );

            return;

        }

        const timeError =
            validateTime(time);

        if (timeError) {

            showError(
                timeError
            );

            return;

        }

        const addressError =
            validateAddress(address);

        if (addressError) {

            showError(
                addressError
            );

            return;

        }

        showLoading(
            "Creando cita..."
        );

        const barberId = 1;

        const barberName =
            "Barbero Demo";

        createAppointment(
            user.id,
            user.name,
            barberId,
            barberName,
            service,
            date,
            time,
            address
        );

        closeLoading();

        showSuccess(
            "Cita creada correctamente"
        );

        appointmentForm.reset();

    }
);