// script.js
const menuButtons = document.querySelectorAll('.menu-btn');
const slider = document.querySelector('.slider');

menuButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Move to the corresponding slide
        slider.style.transform = `translateX(-${index * 100}%)`;
    });
});