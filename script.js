const hamburger = document.getElementById('hamburger-icon');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('responsive');
    hamburger.classList.toggle('active');
});

