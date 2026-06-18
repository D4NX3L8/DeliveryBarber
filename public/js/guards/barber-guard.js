import { getCurrentUser } from "../../../src/controllers/user-controller.js";

const user = getCurrentUser();

if (user.role !== "barber") {
    window.location.href = "../../../src/views/auth/login.html";
}