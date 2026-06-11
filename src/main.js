import { UsuarioModel } from './models/UsuarioModel.js';
import { UsuarioView } from './views/UsuarioView.js';
import { UsuarioController } from './controllers/UsuarioController.js';

document.addEventListener('DOMContentLoaded', () => {
    const appModel = new UsuarioModel();
    const appView = new UsuarioView();
    const appController = new UsuarioController(appModel, appView);
});