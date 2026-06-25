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
    showError
} from "../../../src/utils/alerts.js";

const form =
    document.getElementById(
        "applicationForm"
    );

form.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        const user =
            getCurrentUser();

        const experience =
            document.getElementById(
                "experience"
            ).value;

        if (!experience.trim()) {

            showError(
                "Debes ingresar tu experiencia."
            );

            return;

        }

        showLoading(
            "Enviando solicitud..."
        );

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