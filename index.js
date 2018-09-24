document.addEventListener("DOMContentLoaded", function(e) {
    let canvas = document.querySelector('.canvas');
    let palette = document.querySelector('.palette');
    let currentColor = palette.querySelector('#color-picker');

    let changeColor = function(event) {
        if (!event.target.classList.contains('pixel')) {
            return;
        }
        let pixel = event.target;
        pixel.setAttribute('class', 'pixel ' + currentColor.classList.value);
    };

    let onPaletteClick = function(event) {
        if (!event.target.classList.contains('color')) {
            return;
        }
        currentColor.setAttribute('class', event.target.id);
    }

    canvas.addEventListener('click', changeColor);
    palette.addEventListener('click', onPaletteClick)
});