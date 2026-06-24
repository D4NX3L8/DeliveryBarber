import { registerUser } from "../../../src/controllers/user-controller.js";

import {
    validateName,
    validateEmail,
    validatePassword,
} from "../../../src/utils/validators.js";

import {
    showError,
    showSuccess,
    showLoading,
    closeLoading,
} from "../../../src/utils/alerts.js";

const registerForm =
    document.getElementById("registerForm");

registerForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    //Validaciones
    const nameError =
        validateName(name);

    if (nameError) {

        showError(nameError);

        return;

    }

    const emailError =
        validateEmail(email);

    if (emailError) {

        showError(emailError);

        return;

    }

    const passwordError =
        validatePassword(password);

    if (passwordError) {

        showError(passwordError);

        return;

    }

    //Loading solo si todo está correcto
    showLoading(
        "Registrando usuario..."
    );

    const result =
        registerUser(
            name,
            email,
            password,
            "client"
        );

    if (!result.success) {

        closeLoading();

        showError(
            result.message
        );

        return;

    }

    closeLoading();

    showSuccess(
        "Usuario registrado correctamente"
    );

    setTimeout(() => {

        window.location.href =
            "../../../src/views/auth/login.html";

    }, 1500);

});