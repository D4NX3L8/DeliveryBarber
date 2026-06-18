# DeliveryBarber

Proyecto web para la gestion de una barberia con roles de cliente, barbero y administrador. La aplicacion usa HTML, JavaScript modular y `localStorage` para manejar usuarios, sesiones y flujo basico de navegacion.

## Objetivo

Centralizar en una sola app:

- Inicio de sesion y registro.
- Gestion de citas.
- Compra de productos.
- Gestion de perfiles segun el rol.
- Administracion basica del negocio.

## Roles Del Sistema

### Invitado

Puede:

- Ver la pagina de inicio.
- Ver servicios.
- Ver productos.
- Ver galeria de trabajos.
- Ver barberos disponibles.
- Ver contacto.
- Registrarse.
- Iniciar sesion.

No puede:

- Comprar productos.
- Agendar citas.
- Calificar.
- Ver perfiles privados.

### Cliente

Puede:

- Editar perfil.
- Comprar productos.
- Agendar citas.
- Modificar citas.
- Cancelar citas.
- Ver historial.
- Ver pedidos.
- Calificar barberos.

### Barbero

Puede:

- Gestionar perfil profesional.
- Configurar disponibilidad.
- Ver solicitudes.
- Aceptar o rechazar citas.
- Ver historial de servicios.
- Ver calificaciones recibidas.

### Administrador

Puede:

- Crear cuentas de barberos.
- Gestionar usuarios.
- Gestionar productos.
- Gestionar citas.
- Gestionar solicitudes de empleo.
- Ver estadisticas.

## Paginas Del Proyecto

### Publicas

#### 1. Inicio

Archivo: `index.html`

Contenido esperado:

- Hero principal.
- Explicacion de DeliveryBarber.
- Estadisticas.
- Beneficios.
- Servicios destacados.
- Testimonios.
- Llamado a registrarse.

#### 2. Servicios

Archivo: `services.html`

Contenido esperado:

- Corte clasico.
- Corte moderno.
- Barba.
- Corte + barba.
- Domicilio premium.

#### 3. Productos

Archivo: `products.html`

Contenido esperado:

- Catalogo.
- Filtros.
- Busqueda.

Nota:

- Si el usuario no ha iniciado sesion, debe registrarse para comprar.

#### 4. Nuestros Trabajos

Archivo: `gallery.html`

Contenido esperado:

- Galeria de cortes.
- Antes y despues.
- Trabajos destacados.

#### 5. Barberos

Archivo: `barbers.html`

Contenido esperado:

- Foto.
- Especialidad.
- Calificacion.
- Experiencia.

#### 6. Contacto

Archivo: `contact.html`

Contenido esperado:

- Mision.
- Vision.
- Formulario de contacto.
- Trabaja con nosotros.

#### 7. Login Y Registro

Archivo de login: `src/views/auth/login.html`

Archivo de registro: `src/views/auth/register.html`

Contenido esperado:

- Inicio de sesion.
- Registro de clientes.

### Cliente

#### 8. Dashboard Cliente

Archivo: `client-dashboard.html`

Contenido esperado:

- Proxima cita.
- Ultimos pedidos.
- Accesos rapidos.

#### 9. Agendar Cita

Archivo: `book-appointment.html`

Contenido esperado:

- Seleccion de servicio.
- Fecha.
- Hora.
- Direccion.
- Barbero.

#### 10. Mis Citas

Archivo: `appointments.html`

Contenido esperado:

- Pendientes.
- Completadas.
- Canceladas.

Acciones esperadas:

- Editar.
- Cancelar.

#### 11. Mis Compras

Archivo: `orders.html`

Contenido esperado:

- Historial de productos.

#### 12. Perfil

Archivo: `profile.html`

Contenido esperado:

- Informacion personal.
- Editar datos.

#### 13. Historial

Archivo: `history.html`

Contenido esperado:

- Servicios realizados.
- Calificaciones dadas.

### Barbero

#### 14. Dashboard Barbero

Archivo: `barber-dashboard.html`

Contenido esperado:

- Citas del dia.
- Proximos servicios.
- Ganancias simuladas.

#### 15. Gestion De Citas

Archivo: `barber-appointments.html`

Contenido esperado:

- Solicitudes nuevas.
- Aceptadas.
- Finalizadas.

#### 16. Disponibilidad

Archivo: `availability.html`

Contenido esperado:

- Dias disponibles.
- Horarios disponibles.

#### 17. Perfil Profesional

Archivo: `barber-profile.html`

Contenido esperado:

- Especialidades.
- Descripcion.
- Experiencia.

#### 18. Resenas

Archivo: `reviews.html`

Contenido esperado:

- Comentarios.
- Calificaciones.

### Administrador

#### 19. Dashboard Admin

Archivo: `admin-dashboard.html`

Contenido esperado:

- Estadisticas generales.

#### 20. Gestion De Usuarios

Archivo: `manage-users.html`

Contenido esperado:

- CRUD de clientes.
- CRUD de barberos.

#### 21. Gestion De Productos

Archivo: `manage-products.html`

Contenido esperado:

- CRUD completo de productos.

#### 22. Gestion De Citas

Archivo: `manage-appointments.html`

Contenido esperado:

- Ver todas las citas.

#### 23. Solicitudes De Empleo

Archivo: `job-applications.html`

Contenido esperado:

- Recepcion de formularios de "Trabaja con nosotros".

## Estructura HTML Recomendada

```text
pages/
├── services.html
├── products.html
├── gallery.html
├── barbers.html
├── contact.html
├── auth.html
├── client-dashboard.html
├── book-appointment.html
├── appointments.html
├── orders.html
├── profile.html
├── history.html
├── barber-dashboard.html
├── barber-appointments.html
├── availability.html
├── barber-profile.html
├── reviews.html
├── admin-dashboard.html
├── manage-users.html
├── manage-products.html
├── manage-appointments.html
└── job-applications.html
```

## Mejoras Recomendadas

### Favoritos

Permitir que el cliente guarde barberos favoritos.

Archivo sugerido:

- `favorites.html`

### Notificaciones

Agregar notificaciones basicas para mejorar la experiencia.

Archivo sugerido:

- `notifications.html`

Ejemplos:

- Tu cita fue aceptada.
- Tu cita fue modificada.
- Tu compra fue registrada.

Nota:

- Aunque sea con `localStorage`, este modulo da una apariencia mucho mas profesional al proyecto.

## Alcance Recomendado Para La Primera Version

Para una primera entrega, conviene implementar entre 15 y 18 paginas y priorizar:

- Inicio.
- Servicios.
- Productos.
- Galeria.
- Contacto.
- Login y registro.
- Dashboard cliente.
- Agendar cita.
- Mis citas.
- Perfil cliente.
- Dashboard barbero.
- Gestion de citas del barbero.
- Dashboard admin.
- Gestion de usuarios.
- Gestion de productos.

## Cambios Realizados Y Justificacion

### 1. Correccion Del Dashboard De Cliente

Archivo afectado:

- `src/views/client/dashboard.html`

Problema:

- El dashboard del cliente cargaba `public/js/guards/admin-guard.js`.
- Eso hacia que, despues de iniciar sesion como cliente, la validacion del rol fallara y el sistema lo redirigiera nuevamente al login.

Solucion aplicada:

- Se reemplazo `admin-guard.js` por `client-guard.js`.

Justificacion:

- Cada vista protegida debe validar el rol correcto.
- El dashboard del cliente no puede depender del guard de administrador porque eso rompe el flujo de autenticacion del rol `client`.

### 2. Activacion De `index.html` Como Punto De Entrada

Archivo afectado:

- `index.html`

Problema:

- El archivo `index.html` no mostraba una pantalla util para el usuario al abrir la app.

Solucion aplicada:

- Se dejo `index.html` como punto de entrada y ahora redirige al login en `src/views/auth/login.html`.

Justificacion:

- Esto permite que la app tenga un acceso inicial claro y funcional.
- Tambien mejora la experiencia de prueba porque al ejecutar el proyecto se entra directamente al flujo de autenticacion.

### 3. Correccion Del Boton De Registro En Login

Archivo afectado:

- `src/views/auth/login.html`

Problema:

- El boton `Registrarse` estaba declarado como `type="submit"`.
- Al hacer clic, el formulario intentaba validar el login en lugar de abrir la vista de registro.

Solucion aplicada:

- Se cambio el boton a `type="button"` y se agrego la redireccion a `./register.html`.

Justificacion:

- `Iniciar Sesion` y `Registrarse` representan acciones distintas.
- El boton de registro no debe disparar el `submit` del formulario de login porque genera una validacion incorrecta y bloquea la navegacion esperada.
