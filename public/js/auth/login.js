import {
    loginUser,
    redirectByRole,
} from "../../../src/controllers/user-controller.js";

import {
    validateEmail,
    validatePassword,
} from "../../../src/utils/validators.js";

import {
    showError,
    showSuccess,
    showLoading,
    closeLoading,
} from "../../../src/utils/alerts.js";

const loginForm =
    document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    //Validaciones
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

    //Loading
    showLoading(
        "Iniciando sesión..."
    );

    const user =
        loginUser(
            email,
            password
        );

    if (!user) {

        closeLoading();

        showError(
            "Correo o contraseña incorrectos"
        );

        return;

    }

    closeLoading();

    showSuccess(
        "Inicio de sesión exitoso"
    );

    setTimeout(() => {

        redirectByRole(user);

    }, 1500);

});