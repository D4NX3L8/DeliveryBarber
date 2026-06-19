import {
  getCurrentUser,
  logoutUser,
} from "../../../src/controllers/user-controller.js";

const navbar = document.getElementById("navbar");

const user = getCurrentUser();

console.log("Usuario actual:", user);
//Navbar de invitado
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
                <li><a href="../public/home.html">Inicio</a></li>
                <li><a href="../public/services.html">Servicios</a></li>
                <li><a href="../public/products.html">Productos</a></li>
                <li><a href="../public/gallery.html">Galería</a></li>
                <li><a href="../public/contact.html">Contacto</a></li>
            </ul>
        </nav>

        <div class="nav-actions">
            <a href="../auth/login.html">Login</a>
            <a href="../auth/register.html">Registro</a>
        </div>

        <button class="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
        </button>

    </div>

</header>`;
} else if (user && user.role === "client") {
  //Navbar para el cliente.

  navbar.innerHTML = `
 <header class="navbar">

    <div class="container">

        <a href="../client/home.html" class="logo">
            <img src="#" alt="Logo">
            <h1>Delivery Barber</h1>
        </a>

        <nav class="nav-links">
            <ul>
                <li><a href="../client/home.html">Inicio</a></li>
                <li><a href="../client/reservations.html">Reservar</a></li>
                <li><a href="../client/myAppointments.html">Mis citas</a></li>
                <li><a href="../public/products.html">Productos</a></li>
            </ul>
        </nav>

        <div class="nav-actions">
            <a href="../client/profile.html">Mi perfil</a>
            <a href="../auth/logout.html">Cerrar sesión</a>
        </div>

        <button class="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
        </button>

    </div>

</header>
    `;
} else if (user && user.role === "admin") {
  //Navbar para el Administrador

  navbar.innerHTML = `
 <header class="navbar">

    <div class="container">

        <a href="../admin/dashboard.html" class="logo">
            <img src="#" alt="Logo">
            <h1>Delivery Barber</h1>
        </a>

        <nav class="nav-links">
            <ul>
                <li><a href="../admin/dashboard.html">Dashboard</a></li>
                <li><a href="../admin/users.html">Usuarios</a></li>
                <li><a href="../admin/barbers.html">Barberos</a></li>
                <li><a href="../admin/services.html">Servicios</a></li>
                <li><a href="../admin/products.html">Productos</a></li>
                <li><a href="../admin/reservations.html">Reservas</a></li>
            </ul>
        </nav>

        <div class="nav-actions">
            <a href="../admin/profile.html">Mi perfil</a>
            <a href="../auth/logout.html">Cerrar sesión</a>
        </div>

        <button class="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
        </button>

    </div>

</header>
    `;
} else if (user && user.role === "barber") {
  //Navbar para el Barbero

  navbar.innerHTML = `
<header class="navbar">

    <div class="container">

        <a href="../barber/dashboard.html" class="logo">
            <img src="#" alt="Logo">
            <h1>Delivery Barber</h1>
        </a>

        <nav class="nav-links">
            <ul>
                <li><a href="../barber/dashboard.html">Dashboard</a></li>
                <li><a href="../barber/appointments.html">Agenda</a></li>
                <li><a href="../barber/clients.html">Clientes</a></li>
                <li><a href="../barber/services.html">Servicios</a></li>
            </ul>
        </nav>

        <div class="nav-actions">
            <a href="../barber/profile.html">Mi perfil</a>
            <a href="../auth/logout.html">Cerrar sesión</a>
        </div>

        <button class="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
        </button>

    </div>

</header>
    `;
}

//hacer funcional el boton de cerrar sesion
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    //logoutUser();

    window.location.href = "../../../src/views/auth/login.html";
  });
}
