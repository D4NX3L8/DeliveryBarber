import {
    getCurrentUser
} from "../../../src/controllers/user-controller.js";

import {
    createApplication
} from "../../../src/controllers/application-controller.js";
import {
    showLoading,
    closeLoading,
    showSuccess,
} from "../../../src/utils/alerts.js";
import { showSuccess } from "../../../src/utils/alerts.js";

const form =
    document.getElementById(
        "applicationForm"
    );

form.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        showLoading("Enviando solicitud...");

        const user =
            getCurrentUser();

        const experience =
            document.getElementById(
                "experience"
            ).value;

        createApplication(
            user.id,
            user.name,
            user.email,
            experience
        );

        closeLoading();
        showSuccess(
            "Solicitud enviada correctamente"
        );

        form.reset();

    }
);