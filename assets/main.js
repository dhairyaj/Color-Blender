const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const bodybg = document.getElementById('bodybg');
const copyCode = document.getElementById('copytext');

function setGradient() {
    bodybg.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    copyCode.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);