const menuToggle = document.querySelector('.ri-menu-2-fill');
const listMenu = document.querySelector('.nav_menu_toggle');

menuToggle.addEventListener('click', () => {
    listMenu.classList.toggle('slide');
});