document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.sticky-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;
        const top = rect.top;
        const bottom = rect.bottom;
        const sliderId = section.dataset.slider;
        const slider = document.getElementById(sliderId);

        let progress = 0;

        // Верх секції входить у видиму область
        if (top >= 0 && bottom <= viewportHeight) {
            progress = (viewportHeight - top) / sectionHeight * 108;
        }
        // Верхня частина секції вийшла за межі видимої області, але нижня частина ще не з'явилася
        else if (top < 0 && bottom > viewportHeight) {
            progress = (viewportHeight - top) / sectionHeight * 108;
        }
        // Нижня частина секції входить у видиму область
        else if (top < viewportHeight && bottom > 0) {
            progress = (viewportHeight - top) / sectionHeight * 108;
        }

        // Якщо секція повністю пройшла через екран
        if (bottom <= 0) {
            progress = 100;
        }

        // Тільки оновлюємо слайдер, якщо значення прогресу менше 100%
        if (slider && progress <= 100) {
            slider.value = Math.min(100, Math.max(0, progress));
        }
    });
});
