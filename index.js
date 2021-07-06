// This code is for the JS animated carousel 
let position = 0;

const nextSlide = function() {
    const imageSlider = document.getElementById('imageSlider');
    position -= 200;
    imageSlider.style.transform = `translateX(${position}px)`;
}
    const prevSlide = function() {
    const imageSlider = document.getElementById('imageSlider');
    position += 200;
    imageSlider.style.transform = `translateX(${position}px)`;
}