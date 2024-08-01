document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.sticky-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const height = rect.height;
        const top = rect.top;
        const sliderId = section.dataset.slider;
        const slider = document.getElementById(sliderId);
        const label = document.querySelector(`label[for=${sliderId}]`);

        let progress;

        if (top >= 0 && top <= window.innerHeight) {
            progress = Math.min(100, Math.max(0, (window.innerHeight - top) / window.innerHeight * 100));
        } else if (top < 0) {
            progress = Math.min(100, Math.max(0, (window.innerHeight + top) / height * 100));
        } else {
            progress = 0;
        }

        // Додано для налагодження
        console.log(`Section: ${section.textContent.trim()}`);
        console.log(`Top: ${top}, Progress: ${progress}`);
        
        if (slider) {
            slider.value = progress;
        }

        if (label) {
            label.textContent = Math.round(progress); // Оновлення тексту <label>
        }
    });
});
