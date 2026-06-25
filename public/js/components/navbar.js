import {
    getCurrentUser,
    logoutUser
} from "../../../src/controllers/user-controller.js";
import {
    showLoading,
    closeLoading,
    showSuccess,
} from "../../../src/utils/alerts.js";

const navbar = document.getElementById("navbar");

const user = getCurrentUser();

console.log("Usuario actual:", user);

// ==========================
// NAVBAR INVITADO
// ==========================

if (!user || Object.keys(user).length === 0) {

    navbar.innerHTML = `

    <header class="navbar">

        <div class="container">

            <a href="../public/home.html" class="logo">
                <img src="#" alt="Logo">
                <h1>Delivery Barber</h1>
            </a>

            <nav class="nav-links">

                <ul>

                    <li>
                        <a href="../public/home.html">
                            Inicio
                        </a>
                    </li>

                    <li>
                        <a href="../public/services.html">
                            Servicios
                        </a>
                    </li>

                    <li>
                        <a href="../public/products.html">
                            Productos
                        </a>
                    </li>

                    <li>
                        <a href="../public/barbers.html">
                            Barberos
                        </a>
                    </li>

                    <li>
                        <a href="../public/gallery.html">
                            Galería
                        </a>
                    </li>

                    <li>
                        <a href="../public/contact.html">
                            Contacto
                        </a>
                    </li>

                </ul>

            </nav>

            <div class="nav-actions">

                <a href="../auth/login.html">
                    Login
                </a>

                <a href="../auth/register.html">
                    Registro
                </a>

            </div>

        </div>

    </header>

    `;

}

// ==========================
// NAVBAR CLIENTE
// ==========================

else if (user.role === "client") {

    navbar.innerHTML = `

    <header class="navbar">

        <div class="container">

            <a href="../client/dashboard.html" class="logo">
                <img src="#" alt="Logo">
                <h1>Delivery Barber</h1>
            </a>

            <nav class="nav-links">

                <ul>

                    <li>
                        <a href="../client/dashboard.html">
                            Dashboard
                        </a>
                    </li>

                    <li>
                        <a href="../client/appointments.html">
                            Mis Citas
                        </a>
                    </li>

                    <li>
                        <a href="../client/cart.html">
                            Carrito
                        </a>
                    </li>

                    <li>
                        <a href="../client/purchase-history.html">
                            Historial
                        </a>
                    </li>

                    <li>
                        <a href="../public/services.html">
                            Servicios
                        </a>
                    </li>

                    <li>
                        <a href="../public/products.html">
                            Productos
                        </a>
                    </li>

                </ul>

            </nav>

            <div class="nav-actions">

                <a href="../client/profile.html">
                    Mi Perfil
                </a>

                <button id="logoutBtn">
                    Cerrar Sesión
                </button>

            </div>

        </div>

    </header>

    `;

}

// ==========================
// NAVBAR ADMIN
// ==========================

else if (user.role === "admin") {

    navbar.innerHTML = `

    <header class="navbar">

        <div class="container">

            <a href="../admin/dashboard.html" class="logo">
                <img src="#" alt="Logo">
                <h1>Delivery Barber</h1>
            </a>

            <nav class="nav-links">

                <ul>

                    <li>
                        <a href="../admin/dashboard.html">
                            Dashboard
                        </a>
                    </li>

                    <li>
                        <a href="../admin/users.html">
                            Usuarios
                        </a>
                    </li>

                    <li>
                        <a href="../admin/appointments.html">
                            Citas
                        </a>
                    </li>

                    <li>
                        <a href="../admin/products.html">
                            Productos
                        </a>
                    </li>

                    <li>
                        <a href="../admin/purchases.html">
                            Compras
                        </a>
                    </li>

                    <li>
                        <a href="../admin/applications.html">
                            Solicitudes
                        </a>
                    </li>

                    <li>
                        <a href="../admin/statistics.html">
                            Estadísticas
                        </a>
                    </li>

                </ul>

            </nav>

            <div class="nav-actions">

                <button id="logoutBtn">
                    Cerrar Sesión
                </button>

            </div>

        </div>

    </header>

    `;

}

// ==========================
// NAVBAR BARBERO
// ==========================

else if (user.role === "barber") {

    navbar.innerHTML = `

    <header class="navbar">

        <div class="container">

            <a href="../barber/dashboard.html" class="logo">
                <img src="#" alt="Logo">
                <h1>Delivery Barber</h1>
            </a>

            <nav class="nav-links">

                <ul>

                    <li>
                        <a href="../barber/dashboard.html">
                            Dashboard
                        </a>
                    </li>

                    <li>
                        <a href="../barber/appointments.html">
                            Citas
                        </a>
                    </li>

                    <li>
                        <a href="../barber/availability.html">
                            Disponibilidad
                        </a>
                    </li>

                    <li>
                        <a href="../barber/history.html">
                            Historial
                        </a>
                    </li>


                </ul>

            </nav>

            <div class="nav-actions">

                <a href="../barber/profile.html">
                    Mi Perfil
                </a>

                <button id="logoutBtn">
                    Cerrar Sesión
                </button>

            </div>

        </div>

    </header>

    `;

}

// ==========================
// LOGOUT
// ==========================

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        logoutUser();

        window.location.href =
            "../../../src/views/auth/login.html";

    });

}