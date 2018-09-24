document.addEventListener("DOMContentLoaded", function(e) {
    let canvas = document.querySelector('.canvas');
    let palette = document.querySelector('.palette');

    let changeColor = function(event) {
        if (!event.target.classList.contains('pixel')) {
            return;
        }
        let pixel = event.target;
        pixel.classList.toggle('red');
    };

    let onPaletteClick = function(event) {
        if (!event.target.classList.contains('color')) {
            return;
        }
        alert(`You clicked ${event.target.id}`);
    }

    canvas.addEventListener('click', changeColor);
    palette.addEventListener('click', onPaletteClick)
});