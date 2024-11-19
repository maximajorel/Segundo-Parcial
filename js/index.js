let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function moveToSlide(index) {
    slider.style.transform = `translateX(-${index * 400}px)`;
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    moveToSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    moveToSlide(currentIndex);
});