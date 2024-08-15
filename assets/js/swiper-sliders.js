const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 24,
    breakpoints: {
        1441: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
        1279: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        900: {
            slidesPerView: 2.5,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        320: {
            slidesPerView: 1.2,
            spaceBetween: 16,
        }
    }
});
