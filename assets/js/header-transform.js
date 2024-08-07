// PROGRESS TRANSFORMATION WITH SCROLL

document.addEventListener('DOMContentLoaded', () => {
    const mainHeader = document.querySelector('.main-container-header');
    const headerMenu = document.querySelector('.header-menu');
    const headerBtn = document.querySelector('.header-btn');
    const headerRange = document.querySelector('.header-with-sliders');
    const headerLinks = document.querySelector('.header-links');

    window.addEventListener('scroll', () => {
        // Функція, якщо проскролено 0.9 екрану то відбуваються такі зміни.
        // I далі просто зміни класів і стилів.
        // Щоб було плавно до елементів в стилях добавляєш транзішн до певної зміни.
        if (window.scrollY >= window.innerHeight * 0.1) {
            mainHeader.style.top = '0';
            headerMenu.style.width = '100%';
            headerMenu.style.borderRadius = '0px';
            headerBtn.classList.remove('hidden');
            headerRange.classList.remove('hidden');
            headerRange.style.width = '100%';
            headerRange.style.opacity = '1';
            headerLinks.style.width = '70%';
            headerLinks.style.justifyContent = 'start';
        } else {
            mainHeader.style.top = '85vh';
            headerMenu.style.width = '50%';
            headerMenu.style.borderRadius = '8px';
            headerBtn.classList.add('hidden');
            headerRange.style.width = '0%';
            headerRange.style.opacity = '0';
            headerLinks.style.width = '100%';
            headerLinks.style.justifyContent = 'space-between';
        }
    });
});
