// static/js/main.js

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle logic from Header.tsx
    const menuButton = document.querySelector('button.md\\:hidden');
    const mobileNav = document.querySelector('.md\\:hidden.glass-effect');

    if (menuButton && mobileNav) {
        menuButton.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
        });
    }

    // Contact form submission logic from Contact.tsx
    const contactForm = document.querySelector('form');
    if (contactForm && window.location.pathname.includes('/contact')) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            console.log('Form submitted:', data);
            
            // Here you would typically send the data to a server endpoint
            // For this static conversion, we'll just show an alert.
            alert('Thank you for your message! We will contact you within 24 hours.');
            contactForm.reset();
        });
    }
});