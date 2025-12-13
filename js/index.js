const menuToggle = document.querySelector('.invis_checbox');
const listMenu = document.querySelector('.nav_menu');
const feedbackAlert = document.querySelector('.feedback');
// const closeBtn = document.querySelector('.closeAlert');


menuToggle.addEventListener('click', () => {
    listMenu.classList.toggle('slide');
});