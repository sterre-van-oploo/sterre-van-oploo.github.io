// Slideshow functionality for the Blog section
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll(".slideshow-container.blog .slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
}

function prevSlide() {
    plusSlide(-1);
}

function nextSlide() {
    plusSlide(1);
}
