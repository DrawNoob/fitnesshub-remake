const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 24,
    breakpoints: {
        1280: {
            slidesPerView: 3.5,
            spaceBetween: 24,
        },
        1279: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        900: {
            slidesPerView: 2.5,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 16,
        }
    }
});
