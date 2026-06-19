export function renderFooter() {
    const footer = document.getElementById("footer");

    if (!footer) return;

    footer.innerHTML = `
        <div class="footer-container">

            <div class="footer-brand">
                <h3>DeliveryBarber</h3>
                <p>
                    Barbería profesional a domicilio.
                    Calidad, comodidad y estilo en un solo lugar.
                </p>
            </div>

            <div class="footer-links">
                <h4>Enlaces</h4>
                <ul>
                    <li><a href="../public/home.html">Inicio</a></li>
                    <li><a href="../public/services.html">Servicios</a></li>
                    <li><a href="../public/products.html">Productos</a></li>
                    <li><a href="../public/gallery.html">Galería</a></li>
                    <li><a href="../public/contact.html">Contacto</a></li>
                </ul>
            </div>

            <div class="footer-contact">
                <h4>Contacto</h4>

                <p>Email: deliverybarber.@gmailcom</p>
                <p>Teléfono: +57 300 000 0000</p>
                <p>Medellín, Colombia</p>
            </div>

        </div>

        <div class="footer-bottom">
            <p>
                © 2026 DeliveryBarber. Todos los derechos reservados.
            </p>
        </div>

        <div class="footer-team">
            <h4>Equipo de Desarrollo</h4>

            <p>Juan Pablo Arismendy</p>
            <p>Integrante 2</p>
            <p>Integrante 3</p>
        </div>
    `;
}