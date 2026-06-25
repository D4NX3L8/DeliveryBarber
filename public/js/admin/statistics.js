import { getUsers } from "../../../src/controllers/user-controller.js";
import { getAppointments } from "../../../src/controllers/appointment-controller.js";
import { getProducts } from "../../../src/controllers/product-controller.js";
import { getPurchases } from "../../../src/controllers/purchase-controller.js";

function renderStatistics() {
  const users = getUsers();
  const appointments = getAppointments();
  const products = getProducts();
  const purchases = getPurchases();

  document.getElementById("totalUsers").textContent = users.length;
  document.getElementById("totalClients").textContent =
    users.filter((user) => user.role === "client").length;
  document.getElementById("totalBarbers").textContent =
    users.filter((user) => user.role === "barber").length;
  document.getElementById("totalAppointments").textContent =
    appointments.length;
  document.getElementById("totalPurchases").textContent = purchases.length;
  document.getElementById("totalProducts").textContent = products.length;
  document.getElementById("totalRevenue").textContent = `$${purchases
    .reduce((sum, purchase) => sum + Number(purchase.total), 0)
    .toFixed(2)}`;

  document.getElementById("pendingAppointments").textContent =
    appointments.filter((appointment) => appointment.status === "pending").length;
  document.getElementById("acceptedAppointments").textContent =
    appointments.filter((appointment) => appointment.status === "accepted").length;
  document.getElementById("completedAppointments").textContent =
    appointments.filter((appointment) => appointment.status === "completed").length;
  document.getElementById("cancelledAppointments").textContent =
    appointments.filter((appointment) => appointment.status === "cancelled").length;
}

renderStatistics();
window.addEventListener("storage", renderStatistics);
window.addEventListener("focus", renderStatistics);
