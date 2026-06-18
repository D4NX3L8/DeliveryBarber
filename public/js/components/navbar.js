import { getCurrentUser, logoutUser } from "../../../src/controllers/user-controller.js";

const navbar = document.getElementById("navbar");

const user = getCurrentUser();

console.log("Usuario actual:", user);
//Navbar de invitado
if (!user || Object.keys(user).length === 0) {

    navbar.innerHTML = `
        <nav>

            <a href="../public/home.html">
                Inicio
            </a>

            <a href="../public/services.html">
                Servicios
            </a>

            <a href="../public/products.html">
                Productos
            </a>

            <a href="../public/gallery.html">
                Galería
            </a>

            <a href="../public/contact.html">
                Contacto
            </a>

            <a href="../auth/login.html">
                Login
            </a>

            <a href="../auth/register.html">
                Registro
            </a>

        </nav>
    `;

}else if (user && user.role === "client") { //Navbar para el cliente.

    navbar.innerHTML = `
        <nav>

            <a href="../client/dashboard.html">
                Dashboard
            </a>

            <a href="../client/appointments.html">
                Mis Citas
            </a>

            <a href="../client/cart.html">
                Carrito
            </a>

            <a href="../client/profile.html">
                Perfil
            </a>

            <button id="logoutBtn">
                Cerrar Sesión
            </button>

        </nav>
    `;
} else if (user && user.role === "admin") { //Navbar para el Administrador

    navbar.innerHTML = `
        <nav>

            <a href="../admin/dashboard.html">
                Dashboard
            </a>

            <a href="../admin/users.html">
                Usuarios
            </a>

            <a href="../admin/products.html">
                Productos
            </a>

            <a href="../admin/applications.html">
                Solicitudes
            </a>

            <a href="../admin/statistics.html">
                Estadísticas
            </a>

            <button id="logoutBtn">
                Cerrar Sesión
            </button>

        </nav>
    `;
} else if (user && user.role === "barber") { //Navbar para el Barbero

    navbar.innerHTML = `
        <nav>

            <a href="../barber/dashboard.html">
                Dashboard
            </a>

            <a href="../barber/appointments.html">
                Citas
            </a>

            <a href="../barber/availability.html">
                Disponibilidad
            </a>

            <a href="../barber/profile.html">
                Perfil
            </a>

            <a href="../barber/reviews.html">
                Reseñas
            </a>

            <button type="button" id="logoutBtn">
                Cerrar Sesión
            </button>

        </nav>
    `;
}

//hacer funcional el boton de cerrar sesion
const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        //logoutUser();

        window.location.href =
            "../../../src/views/auth/login.html";

    });

}