const menuToggle = document.querySelector('.ri-menu-2-fill');
const listMenu = document.querySelector('.nav_menu_toggle');
const feedbackAlert = document.querySelector('.feedback');
const closeBtn = document.querySelector('.closeAlert');

closeBtn.addEventListener('click', () => {
    feedbackAlert.classList.toggle('enabled');
})

menuToggle.addEventListener('click', () => {
    listMenu.classList.toggle('slide');
});