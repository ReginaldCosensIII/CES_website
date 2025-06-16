// static/js/main.js

document.addEventListener('DOMContentLoaded', function () {
    // --- Mobile menu toggle logic ---
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            // This will toggle a class to show/hide the menu
            // and also change the icon from a hamburger to an 'X'
            mobileMenu.classList.toggle('active'); 
            menuButton.classList.toggle('is-active');
        });
    }

    // --- Contact form submission logic ---
    const contactForm = document.querySelector('form');
    if (contactForm && window.location.pathname.includes('/contact')) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            console.log('Form submitted:', data);
            
            // A custom modal would be better than an alert in a real application
            alert('Thank you for your message! We will contact you within 24 hours.');
            contactForm.reset();
        });
    }
});
