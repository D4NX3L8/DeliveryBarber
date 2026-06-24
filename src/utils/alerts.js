//Alerta de éxito
export function showSuccess(message) {

    return Swal.fire({
        position: "top-end",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500
    });

}

//Alerta de error
export function showError(message) {

    return Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
        confirmButtonText: "Aceptar"
    });

}

//Alerta de advertencia
export function showWarning(message) {

    return Swal.fire({
        icon: "warning",
        title: "Advertencia",
        text: message,
        confirmButtonText: "Entendido"
    });

}

//Toast
export function showToast(message) {

    return Swal.mixin({
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

//Loading
export function showLoading(
    message = "Procesando..."
) {

    return Swal.fire({
        title: message,
        html: "Por favor espera...",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,

        didOpen: () => {

            Swal.showLoading();

        }

    });

}

//Cerrar loading
export function closeLoading() {

    Swal.close();

}

//Confirmación
export async function showConfirm(message) {

    const result =
        await Swal.fire({

            title:
                "¿Estás seguro?",

            text:
                message,

            icon:
                "question",

            showCancelButton:
                true,

            confirmButtonText:
                "Sí",

            cancelButtonText:
                "Cancelar"

        });

    return result.isConfirmed;

}