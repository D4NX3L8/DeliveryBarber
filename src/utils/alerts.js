//Alerta de éxito
export function showSuccess(message) {

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500
    });

}

//Alerta de error
export function showError(message) {

    Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
        confirmButtonText: "Aceptar"
    });

}

//Alerta de advertencia
export function showWarning(message) {

    Swal.fire({
        icon: "warning",
        title: "Advertencia",
        text: message,
        confirmButtonText: "Entendido"
    });

}

//Toast informativo
export function showToast(message) {

    Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {

            toast.onmouseenter =
                Swal.stopTimer;

            toast.onmouseleave =
                Swal.resumeTimer;

        }

    }).fire({
        icon: "success",
        title: message
    });

}

//Carga
export function showLoading(message = "Procesando...") {

    Swal.fire({
        title: message,
        html: "Por favor espera...",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

}

//Cerrar loading manualmente
export function closeLoading() {

    Swal.close();

}

//Confirmación
export async function showConfirm(message) {

    const result =
        await Swal.fire({
            title: "¿Estás seguro?",
            text: message,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "Cancelar"
        });

    return result.isConfirmed;

}