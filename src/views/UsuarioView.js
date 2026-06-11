export class UsuarioView {
    constructor() {
        this.app = document.getElementById('app');
    }

    // Vincula el evento de registro desde el controlador
    bindRegistrar(handler) {
        // Implementación futura del formulario
    }

    // Vincula el evento de login desde el controlador
    bindLogin(handler) {
        // Implementación futura del formulario
    }

    mostrarMensaje(mensaje) {
        alert(mensaje);
    }

    limpiarFormularioRegistro() {
        console.log("Formulario de registro limpiado");
    }
}
