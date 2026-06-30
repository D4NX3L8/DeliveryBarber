import { getUsers, deleteUser } from "../../../src/controllers/user-controller.js";
import {
    showLoading,
    closeLoading,
    showSuccess,
} from "../../../src/utils/alerts.js";

const usersContainer =
    document.getElementById("usersContainer");

const users =
    getUsers();

users.forEach((user) => {

    usersContainer.innerHTML += `

        <div class="user-card card">

            <div>

            <h3>
                ${user.name}
            </h3>

            <p>
                ${user.email}
            </p>

            <span class="user-role-badge">
                ${user.role}
            </span>

            </div>

            <button
                class="deleteBtn btn-secondary-outline"
                data-id="${user.id}">
                Eliminar
            </button>

        </div>

    `;

});

const deleteButtons =
    document.querySelectorAll(".deleteBtn");

deleteButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const id =
            Number(button.dataset.id);

        showLoading("Eliminando usuario...");
        deleteUser(id);
        closeLoading();
        showSuccess("Usuario eliminado").then(() => {
            location.reload();
        });

    });

});