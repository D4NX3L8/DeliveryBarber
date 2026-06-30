// Hamburger menu toggle - purely UI, no business logic
(function() {
    function initHamburger() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        const navLinks = navbar.querySelector('.nav-links');
        if (!navLinks) return;

        // Only add hamburger if it doesn't already exist
        if (navbar.querySelector('.hamburger')) return;

        const navActions = navbar.querySelector('.nav-actions');
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.setAttribute('aria-label', 'Menú');
        hamburger.innerHTML = '<span></span><span></span><span></span>';

        // Insert before nav-actions
        if (navActions) {
            navActions.parentNode.insertBefore(hamburger, navActions);
        }

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }

    // Wait for navbar component to render
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(initHamburger, 100));
    } else {
        setTimeout(initHamburger, 100);
    }
})();
