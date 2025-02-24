document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    let currentSlideIndex = 0; // Começa no primeiro slide

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        currentSlideIndex = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            showSlide(index);
        });
    });

    // Exibir o primeiro slide ao carregar a página
    showSlide(currentSlideIndex);
});
