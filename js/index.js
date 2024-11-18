document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".carousel-btn.left");
    const nextButton = document.querySelector(".carousel-btn.right");
    const carousel = document.querySelector(".carousel");

    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel img");
    const totalImages = images.length;

    function updateCarousel() {
        const offset = -currentIndex * (images[0].clientWidth + 15); // El ancho de la imagen + margen
        carousel.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalImages - 1; // Si está en la primera, vuelve a la última imagen
        }
        updateCarousel();
    });

    nextButton.addEventListener("click", function() {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Si está en la última, vuelve a la primera imagen
        }
        updateCarousel();
    });

    // Opcional: Agregar funcionalidad para cambiar automáticamente las imágenes
    setInterval(function() {
        nextButton.click();
    }, 7000); // Cambia la imagen cada 7 segundos
});