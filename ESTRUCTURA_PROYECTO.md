# Estructura del Proyecto - DeliveryBarber

```
DeliveryBarber/
│
├── Guia_GitHub.txt
├── README.md
├── index.html
│
├── public/
│   ├── css/
│   │   ├── footer.css
│   │   ├── global.css
│   │   ├── navbar.css
│   │   │
│   │   ├── admin/
│   │   │   ├── applications.css
│   │   │   ├── appointments.css
│   │   │   ├── dashboard.css
│   │   │   ├── products.css
│   │   │   ├── statistics.css
│   │   │   └── users.css
│   │   │
│   │   ├── auth/
│   │   │   ├── login.css
│   │   │   ├── recover-password.css
│   │   │   └── register.css
│   │   │
│   │   ├── barber/
│   │   │   ├── appointments.css
│   │   │   ├── availability.css
│   │   │   ├── dashboard.css
│   │   │   ├── history.css
│   │   │   ├── profile.css
│   │   │   └── reviews.css
│   │   │
│   │   ├── client/
│   │   │   ├── appointments.css
│   │   │   ├── cart.css
│   │   │   ├── dashboard.css
│   │   │   ├── profile.css
│   │   │   └── purchase-history.css
│   │   │
│   │   └── public/
│   │       ├── barbers.css
│   │       ├── contact.css
│   │       ├── gallery.css
│   │       ├── home.css
│   │       ├── products.css
│   │       └── services.css
│   │
│   ├── images/
│   │   └── [Archivos de imagen]
│   │
│   └── js/
│       ├── admin/
│       │   ├── applications.js
│       │   ├── appointments.js
│       │   ├── dashboard.js
│       │   ├── statistics.js
│       │   └── users.js
│       │
│       ├── auth/
│       │   ├── login.js
│       │   └── register.js
│       │
│       ├── barber/
│       │   ├── appointments.js
│       │   └── dashboard.js
│       │
│       ├── client/
│       │   ├── appointments.js
│       │   ├── dashboard.js
│       │   └── profile.js
│       │
│       ├── components/
│       │   ├── footer.js
│       │   └── navbar.js
│       │
│       └── guards/
│           ├── admin-guard.js
│           ├── auth-guard.js
│           ├── barber-guard.js
│           └── client-guard.js
│
└── src/
    ├── controllers/
    │   ├── application-controller.js
    │   ├── appointment-controller.js
    │   ├── product-controller.js
    │   ├── service-controller.js
    │   └── user-controller.js
    │
    ├── middleware/
    │   ├── admin.js
    │   ├── auth.js
    │   ├── barber.js
    │   └── client.js
    │
    ├── models/
    │   ├── application-model.js
    │   ├── appointment-model.js
    │   ├── product-model.js
    │   ├── service-model.js
    │   └── user-model.js
    │
    ├── utils/
    │   ├── alerts.js
    │   ├── localstorage.js
    │   ├── main.js
    │   └── validators.js
    │
    └── views/
        ├── admin/
        │   ├── applications.html
        │   ├── appointments.html
        │   ├── dashboard.html
        │   ├── products.html
        │   ├── statistics.html
        │   └── users.html
        │
        ├── auth/
        │   ├── login.html
        │   ├── recover-password.html
        │   └── register.html
        │
        ├── barber/
        │   ├── appointments.html
        │   ├── availability.html
        │   ├── dashboard.html
        │   ├── history.html
        │   ├── profile.html
        │   └── reviews.html
        │
        ├── client/
        │   ├── appointments.html
        │   ├── cart.html
        │   ├── dashboard.html
        │   ├── profile.html
        │   └── purchase-history.html
        │
        └── public/
            ├── barbers.html
            ├── contact.html
            ├── gallery.html
            ├── home.html
            ├── products.html
            └── services.html
```

## Resumen de la Estructura

### Carpetas Principales:
- **public/**: Archivos estáticos del cliente (CSS, imágenes, JavaScript del frontend)
- **src/**: Código del servidor (controladores, modelos, rutas, middleware, vistas)

### Organización por Módulos:
- **Admin**: Gestión de aplicaciones, citas, productos, estadísticas y usuarios
- **Auth**: Autenticación (login, registro, recuperación de contraseña)
- **Barber**: Dashboard, citas, disponibilidad, historial, perfil y reseñas del barbero
- **Client**: Dashboard, citas, carrito, perfil e historial de compras del cliente
- **Public**: Secciones públicas (inicio, barberos, servicios, productos, galería, contacto)

### Total de Archivos:
- **Controladores**: 6 archivos
- **Modelos**: 6 archivos
- **Rutas**: 5 archivos
- **Middleware**: 4 archivos
- **Vistas HTML**: 20 archivos
- **Hojas de estilo CSS**: 22 archivos
- **Archivos JavaScript**: 20+ archivos
