import {
  loginUser,
  redirectByRole,
} from "../../../src/controllers/user-controller.js";
import {
  showError,
  showSuccess,
  showLoading,
  closeLoading,
} from "../../../src/utils/alerts.js";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  showLoading("Iniciando sesión...");
  const user = loginUser(email, password);

  if (!user) {
    closeLoading();
    showError("Correo o contraseña incorrectos");

    return;
  }

  closeLoading();
  showSuccess("Inicio de sesión exitoso").then(() => {
    redirectByRole(user);
  });
});
