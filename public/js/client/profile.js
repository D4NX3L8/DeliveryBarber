import {
    getCurrentUser
} from "../../../src/controllers/user-controller.js";

import {
    createApplication
} from "../../../src/controllers/application-controller.js";

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

        createApplication(
            user.id,
            user.name,
            user.email,
            experience
        );

        alert(
            "Solicitud enviada correctamente"
        );

        form.reset();

    }
);