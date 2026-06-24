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

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  showLoading("Registrando usuario...");

  const nameError = validateName(name);

  if (nameError) {
    showError(nameError);
    return;
  }

  const emailError = validateEmail(email);

  if (emailError) {
    showError(emailError);
    return;
  }

  const passwordError = validatePassword(password);

  if (passwordError) {
    closeLoading();
    showError(passwordError);
    return;
  }

  const result = registerUser(name, email, password, "client");

  if (!result.success) {
    closeLoading();
    showError(result.message);

    return;
  }

  closeLoading();
  showSuccess("Usuario registrado correctamente").then(() => {
    window.location.href = "../../../src/views/auth/login.html";
  });
});
