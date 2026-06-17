export class UsuarioModel {
    constructor() {
        this.usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    }

    guardarEnStorage() {
        localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }

    registrar(nuevoUsuario) {
        const existe = this.usuarios.find(user => user.email === nuevoUsuario.email);
        if (existe) return { seguro: false, mensaje: 'El correo ya está registrado.' };

        nuevoUsuario.id = Date.now();
        this.usuarios.push(nuevoUsuario);
        this.guardarEnStorage();
        return { seguro: true, mensaje: '¡Registro exitoso!' };
    }

    login(email, password) {
        const usuarioValido = this.usuarios.find(user => user.email === email && user.password === password);
        if (usuarioValido) {
            localStorage.setItem('usuarioActivo', JSON.stringify(usuarioValido));
            return { seguro: true, usuario: usuarioValido };
        }
        return { seguro: false, mensaje: 'Correo o contraseña incorrectos.' };
    }
}