import {
    getCurrentUser,
    logoutUser
} from "../../../src/controllers/user-controller.js";

import { getCart } from "../../../src/models/cart-model.js";

const navbar = document.getElementById("navbar");
const user = getCurrentUser();
const logoDefault = "/public/images/logo-oscuro.png";
const logoDark = "/public/images/logo.png";

const themeButtonTemplate = `
    <button id="themeToggle" class="theme-toggle" type="button" aria-label="Alternar tema">
      <span class="theme-label">Modo normal</span>
    </button>`;

function renderNavbar() {
  if (!navbar) return;
  const guestNav = `
    <header class="navbar">
      <div class="container">
        <a href="../public/home.html" class="logo">
          <img id="navbarLogo" src="${logoDefault}" alt="Logo" />
          <h1>Delivery Barber</h1>
        </a>
        <nav class="nav-links">
          <ul>
            <li><a href="../public/home.html">Inicio</a></li>
            <li><a href="../public/services.html">Servicios</a></li>
            <li><a href="../public/products.html">Productos</a></li>
            <li><a href="../public/barbers.html">Barberos</a></li>
            <li><a href="../public/gallery.html">Galería</a></li>
            <li><a href="../public/contact.html">Contacto</a></li>
          </ul>
        </nav>
        <div class="nav-actions">
          <a href="../auth/login.html">Login</a>
          <a href="../auth/register.html">Registro</a>
          ${themeButtonTemplate}
        </div>
      </div>
    </header>
  `;

  const clientNav = `
    <header class="navbar">
      <div class="container">
        <a href="../client/dashboard.html" class="logo">
          <img id="navbarLogo" src="${logoDefault}" alt="Logo" />
          <h1>Delivery Barber</h1>
        </a>
        <nav class="nav-links">
          <ul>
            <li><a href="../client/dashboard.html">Dashboard</a></li>
            <li><a href="../client/appointments.html">Mis Citas</a></li>
            <li><a href="../client/cart.html">Carrito<span id="cartCount" class="cart-count"></span></a></li>
            <li><a href="../client/purchase-history.html">Historial</a></li>
            <li><a href="../public/services.html">Servicios</a></li>
            <li><a href="../public/products.html">Productos</a></li>
          </ul>
        </nav>
        <div class="nav-actions">
          <a href="../client/profile.html">Mi Perfil</a>
          <button id="logoutBtn">Cerrar Sesión</button>
          ${themeButtonTemplate}
        </div>
      </div>
    </header>
  `;

  const adminNav = `
    <header class="navbar">
      <div class="container">
        <a href="../admin/dashboard.html" class="logo">
          <img id="navbarLogo" src="${logoDefault}" alt="Logo" />
          <h1>Delivery Barber</h1>
        </a>
        <nav class="nav-links">
          <ul>
            <li><a href="../admin/dashboard.html">Dashboard</a></li>
            <li><a href="../admin/users.html">Usuarios</a></li>
            <li><a href="../admin/appointments.html">Citas</a></li>
            <li><a href="../admin/products.html">Productos</a></li>
            <li><a href="../admin/applications.html">Solicitudes</a></li>
            <li><a href="../admin/statistics.html">Estadísticas</a></li>
          </ul>
        </nav>
        <div class="nav-actions">
          <button id="logoutBtn">Cerrar Sesión</button>
          ${themeButtonTemplate}
        </div>
      </div>
    </header>
  `;

  const barberNav = `
    <header class="navbar">
      <div class="container">
        <a href="../barber/dashboard.html" class="logo">
          <img id="navbarLogo" src="${logoDefault}" alt="Logo" />
          <h1>Delivery Barber</h1>
        </a>
        <nav class="nav-links">
          <ul>
            <li><a href="../barber/dashboard.html">Dashboard</a></li>
            <li><a href="../barber/appointments.html">Citas</a></li>
            <li><a href="../barber/availability.html">Disponibilidad</a></li>
            <li><a href="../barber/history.html">Historial</a></li>
          </ul>
        </nav>
        <div class="nav-actions">
          <a href="../barber/profile.html">Mi Perfil</a>
          <button id="logoutBtn">Cerrar Sesión</button>
          ${themeButtonTemplate}
        </div>
      </div>
    </header>
  `;

  if (!user || Object.keys(user).length === 0) {
    navbar.innerHTML = guestNav;
    return;
  }

  if (user.role === 'client') {
    navbar.innerHTML = clientNav;
    return;
  }

  if (user.role === 'admin') {
    navbar.innerHTML = adminNav;
    return;
  }

  if (user.role === 'barber') {
    navbar.innerHTML = barberNav;
    return;
  }
}

function setupTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('deliveryBarberTheme') || 'dark';

  const applyTheme = (theme) => {
    document.body.classList.toggle('theme-light', theme === 'light');
    if (themeToggle) {
      const themeIcon = themeToggle.querySelector('.theme-icon');
      const themeLabel = themeToggle.querySelector('.theme-label');
      const navbarLogo = document.getElementById('navbarLogo');
      if (themeIcon) {
        themeIcon.src = theme === 'light' ? '/public/images/modo%20normal.png' : '/public/images/modo%20oscuro.png';
        themeIcon.alt = theme === 'light' ? 'Modo normal' : 'Modo oscuro';
      }
      if (themeLabel) {
        themeLabel.textContent = theme === 'light' ? 'Modo normal' : 'Modo oscuro';
      }
      if (navbarLogo) {
        navbarLogo.src = theme === 'light' ? logoDark : logoDefault;
        navbarLogo.alt = theme === 'light' ? 'Logo oscuro' : 'Logo';
      }
      themeToggle.setAttribute('aria-label', theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo normal');
    }
    localStorage.setItem('deliveryBarberTheme', theme);
  };

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.classList.contains('theme-light') ? 'dark' : 'light';
      applyTheme(nextTheme);
    });
  }

  applyTheme(currentTheme);
}

function setupLogout() {
  const logoutBtn = document.getElementById('logoutBtn');
  if (!logoutBtn) return;
  logoutBtn.addEventListener('click', () => {
    logoutUser();
    window.location.href = '../../../src/views/auth/login.html';
  });
}

function renderCartCount() {
  const cartCountEl = document.getElementById('cartCount');
  if (!cartCountEl) return;

  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (totalItems > 0) {
    cartCountEl.textContent = totalItems;
    cartCountEl.classList.add('cart-count--visible');
  } else {
    cartCountEl.textContent = '';
    cartCountEl.classList.remove('cart-count--visible');
  }
}

renderNavbar();
setupTheme();
setupLogout();
renderCartCount();
