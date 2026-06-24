//Valida que el nombre este correcto.
export function validateName(name) {

    if (!name.trim()) {
        return "El nombre es obligatorio";
    }

    return null;

}

//Valida correo
export function validateEmail(email) {

    if (!email.trim()) {
        return "El correo es obligatorio";
    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return "Correo inválido";
    }

    return null;

}

//Valida contraseña
export function validatePassword(password) {

    if (!password.trim()) {
        return "La contraseña es obligatoria";
    }

    if (password.length < 6) {
        return "La contraseña debe tener mínimo 6 caracteres";
    }

    return null;

}

//Valida experiencia para solicitud de barbero
export function validateExperience(experience) {

    if (!experience.trim()) {
        return "Debes ingresar tu experiencia";
    }

    return null;

}

//Valida dirección
export function validateAddress(address) {

    if (!address.trim()) {
        return "La dirección es obligatoria";
    }

    return null;

}

//Valida fecha
export function validateDate(date) {

    if (!date) {
        return "Debes seleccionar una fecha";
    }

    return null;

}

//Valida hora
export function validateTime(time) {

    if (!time) {
        return "Debes seleccionar una hora";
    }

    return null;

}