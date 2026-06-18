import User from "../models/user-model.js";
import { saveData, getData, removeData } from "../utils/localstorage.js";

//Regiatrar Usuario.
export function registerUser(name, email, password, role) {
    const users = getData("users");

    //Valida que el usuario no exista.
    const existingUser = users.find((user) => user.email.toLowerCase() === email.toLowerCase());

    if (existingUser) {
        return {
            success: false,
            message: "El correo ya está registrado",
        };
    }
    //Crea el nuevo usuario.
    const user = new User(Date.now(), name, email, password, role);

    users.push(user);

    saveData("users", users);

    return { success: true, user };
}

//Iniciar sesión.
export function loginUser(email, password) {
    const users = getData("users");

    const user = users.find(
        (user) => user.email === email && user.password === password,
    );

    if (!user) {
        return null;
    }

    saveData("session", {
        id: user.id,
        name: user.name,
        role: user.role,
    });

    return user;
}

//Eliminar sesion
export function logoutUser() {
    removeData("session");
}

//Busca una sesion
export function getCurrentUser() {
    return getData("session");
}

//Redireccion según el tipo de rol.
export function redirectByRole(user) {

    console.log(user.rol)

    if (user.role === "client") {
        window.location.href = "../client/dashboard.html";
    }

    if (user.role === "barber") {
        window.location.href = "../barber/dashboard.html";
    }

    if (user.role === "admin") {
        window.location.href = "../admin/dashboard.html";
    }
}
