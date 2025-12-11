const menuToggle = document.querySelector('.invis_checbox');
const listMenu = document.querySelector('.nav_menu');
const feedbackAlert = document.querySelector('.feedback');
const closeBtn = document.querySelector('.closeAlert');

closeBtn.addEventListener('click', () => {
    feedbackAlert.classList.toggle('enabled');
})

menuToggle.addEventListener('click', () => {
    listMenu.classList.toggle('slide');
});