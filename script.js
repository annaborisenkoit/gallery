const images = ['taxa1.jpg', 'taxa2.jpg', 'taxa3.jpg', 'taxa4.jpg'];
let currentIndex = 0;

const galleryImage = document.getElementById('galleryImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function updateImage() {
    galleryImage.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});