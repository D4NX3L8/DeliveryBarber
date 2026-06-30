import { showSuccess, showError } from "../../../src/utils/alerts.js";

// Contact form
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const message = document.getElementById("contact-message").value.trim();

        if (!name || !email || !message) {
            showError("Por favor completa todos los campos.");
            return;
        }

        showSuccess("¡Mensaje enviado! Nos pondremos en contacto pronto.");
        contactForm.reset();
    });
}

// Barber application form
const applicationForm = document.getElementById("barber-application-form");
if (applicationForm) {
    applicationForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("applicant-name").value.trim();
        const email = document.getElementById("applicant-email").value.trim();
        const phone = document.getElementById("applicant-phone").value.trim();
        const experience = document.getElementById("applicant-experience").value.trim();
        const msg = document.getElementById("applicant-message").value.trim();

        if (!name || !email || !phone || !experience || !msg) {
            showError("Por favor completa todos los campos del formulario.");
            return;
        }

        showSuccess("¡Solicitud enviada! Te contactaremos a la brevedad.");
        applicationForm.reset();
    });
}
