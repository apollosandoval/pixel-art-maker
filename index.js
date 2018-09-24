document.addEventListener("DOMContentLoaded", function(e) {
    let canvas = document.querySelector('.canvas');

    let changeColor = function(event) {
        let pixel = event.target;
        pixel.classList.toggle('red');
    };

    canvas.addEventListener('click', changeColor);
});