import { getUsers } from "../../../src/controllers/user-controller.js";

const container = document.getElementById("barbersContainer");
const barbers = getUsers().filter((user) => user.role === "barber");

if (!container) {
  throw new Error("No se encontró el contenedor de barberos");
}

if (barbers.length === 0) {
  container.innerHTML = `
    <div class="empty-state card">
      <h3>No hay barberos registrados aún</h3>
      <p>Regístrate o contacta al administrador para que active un barbero.</p>
    </div>
  `;
} else {
  container.innerHTML = barbers
    .map((barber) => {
      return `
      <article class="card barber-card">
        <div class="barber-name">
          <h3>${barber.name}</h3>
          <span class="barber-role">Barbero</span>
        </div>
        <p>Correo: ${barber.email}</p>
        <p>Experiencia: ${barber.experience || "Información no disponible"}</p>
        <p class="barber-rating">⭐ ${barber.rating || "4.8"}</p>
      </article>
    `;
    })
    .join("\n");
}
