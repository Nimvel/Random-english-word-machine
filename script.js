const button = document.querySelector('button');
const main = document.querySelector('body');

const colors = ['#2b1c2b', '#6b4e6b', '#ffc9a6', '#afffa6', '#a6dbff', '#cfd9ff', '#ffcff1', '#cbb5f2', '#f2b5bd', '#553853', '#80547d'];
let arr = [];

function randomColor() {
    if (colors.length === arr.length) arr = [];
    let color = colors[Math.floor(Math.random() * colors.length)];
    arr.indexOf(color) != -1 ? randomColor() : arr.push(color);
    return color;
}

function loaded () {
    let color = randomColor();
    main.style.background = color;
    button.style.background = color;
    main.style.color = color;
}

document.addEventListener('DOMContentLoaded', loaded);
button.addEventListener('click', loaded);


