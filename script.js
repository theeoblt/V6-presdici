// Menu toggle pour mobile
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.querySelector('#main-nav ul');

navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('show');
});
