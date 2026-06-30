import { showSuccess, showError } from "../../../src/utils/alerts.js";

const recoverForm = document.getElementById("recoverForm");

if (recoverForm) {
    recoverForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("recover-email").value.trim();

        if (!email) {
            showError("Por favor ingresa tu correo electrónico.");
            return;
        }

        // Simulate sending recovery link
        showSuccess("Si tu correo está registrado, recibirás un enlace de recuperación.");
        recoverForm.reset();
    });
}
