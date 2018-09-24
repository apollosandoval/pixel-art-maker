document.addEventListener("DOMContentLoaded", function(e) {
    let canvas = document.querySelector('.canvas');
    let palette = document.querySelector('.palette');
    let currentColor = palette.querySelector('#color-picker');

    let changeColor = function(event) {
        if (!event.target.classList.contains('pixel')) {
            return;
        }
        let pixel = event.target;
        pixel.style.backgroundColor = currentColor.value;
    };

    let brushStroke = function(event) {
        if (!event.target.classList.contains('pixel')) {
            return;
        }
        if (event.buttons == 1) {
            let pixel = event.target;
            pixel.style.backgroundColor = currentColor.value;
        }
    }

    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }

    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*\d+\.*\d+)?\)$/);
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    let onPaletteClick = function(event) {
        if (!event.target.classList.contains('color')) {
            return;
        }
        let color = getComputedStyle(event.target).backgroundColor;
        // console.log(rgb2hex(color));
        currentColor.value = rgb2hex(color);
    }

    canvas.addEventListener('mousedown', changeColor);
    palette.addEventListener('click', onPaletteClick);

    for (let pixel of canvas.getElementsByClassName('pixel')) {
        pixel.addEventListener('mouseenter', brushStroke);
    }
});