document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.sticky-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const height = rect.height;
        const top = rect.top;
        const sliderId = section.dataset.slider;
        const slider = document.getElementById(sliderId);

        let progress;

        if (top >= 0 && top <= window.innerHeight) {
            progress = Math.min(100, Math.max(0, (window.innerHeight - top) / window.innerHeight * 120));
        } else if (top < 0) {
            progress = Math.min(100, Math.max(0, (window.innerHeight + top) / height * 120));
        } else {
            progress = 0;
        }
        
        if (slider) {
            slider.value = progress;
        }
    });
});
