export class UsuarioController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindRegistrar(this.handleRegistrar.bind(this));
        this.view.bindLogin(this.handleLogin.bind(this));
    }

    handleRegistrar(datosUsuario) {
        const resultado = this.model.registrar(datosUsuario);
        if (resultado.seguro) {
            this.view.mostrarMensaje(resultado.mensaje);
            this.view.limpiarFormularioRegistro();
        } else {
            this.view.mostrarMensaje(resultado.mensaje);
        }
    }

    handleLogin(email, password) {
        const resultado = this.model.login(email, password);
        if (resultado.seguro) {
            this.view.mostrarMensaje(`¡Bienvenido, ${resultado.usuario.nombre}!`);
            // Redirige a la nueva estructura de carpetas
            window.location.href = './src/views/pages/customer/dashboard.html'; 
        } else {
            this.view.mostrarMensaje(resultado.mensaje);
        }
    }
}