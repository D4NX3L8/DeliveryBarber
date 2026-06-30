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
                <div class="footer-socials">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <wa-icon name="instagram" family="brands" style="font-size: 1.5em"></wa-icon>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <wa-icon name="facebook" family="brands" style="font-size: 1.5em"></wa-icon>
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <wa-icon name="tiktok" family="brands" style="font-size: 1.5em"></wa-icon>
                    </a>
                </div>
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
                <p>Email: deliverybarber.@gmail.com</p>
                <p>Teléfono: +57 300 000 0000</p>
                <p>Medellín, Colombia</p>
            </div>

        </div>

        <div class="footer-bottom">
            <p>
                © 2026 DeliveryBarber. Todos los derechos reservados.
            </p>
        </div>
    `;
}

renderFooter();