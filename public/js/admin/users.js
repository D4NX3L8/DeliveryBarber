import { getUsers, deleteUser } from "../../../src/controllers/user-controller.js";

const usersContainer =
    document.getElementById("usersContainer");

const users =
    getUsers();

users.forEach((user) => {

    usersContainer.innerHTML += `

        <div>

            <h3>
                ${user.name}
            </h3>

            <p>
                ${user.email}
            </p>

            <p>
                Rol:
                ${user.role}
            </p>

            <button
                class="deleteBtn"
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

        deleteUser(id);

        location.reload();

    });

});