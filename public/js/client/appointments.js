import { createAppointment } from "../../../src/controllers/appointment-controller.js";
import { getCurrentUser } from "../../../src/controllers/user-controller.js";
import { showSuccess } from "../../../src/utils/alerts.js";

const appointmentForm =
    document.getElementById("appointmentForm");

appointmentForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        const user =
            getCurrentUser();

        const service =
            document.getElementById("service").value;

        const date =
            document.getElementById("date").value;

        const time =
            document.getElementById("time").value;

        const address =
            document.getElementById("address").value;

        const barberId = 1;
        const barberName = "Barbero Demo";

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

        showSuccess("Cita creada correctamente");

        appointmentForm.reset();

    }
);