document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    body.appendChild(overlay);

    // Toggle menu
    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        menuToggle.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Close menu on window resize if open
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Add escape key listener
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.classList.remove('active');
            body.style.overflow = '';
        }
    });
}); 