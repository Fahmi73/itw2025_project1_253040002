const menuToggle = document.querySelector('.invis_checbox');
const listMenu = document.querySelector('.nav_menu');
const feedbackAlert = document.querySelector('.feedback');

menuToggle.addEventListener('click', () => {
    listMenu.classList.toggle('slide');
});