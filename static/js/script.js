// This file can be used for any custom JavaScript functionality.
// For example, handling the mobile menu toggle.

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.querySelector('.md\\:hidden + .glass-effect');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});