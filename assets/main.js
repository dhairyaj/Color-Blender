const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const bodybg = document.getElementById('bodybg');
const copyCode = document.getElementById('copyCode');
const slider = document.getElementById("linearDegree");
const degree = document.getElementById("degreeValue");
degree.innerHTML = slider.value;

slider.oninput = function() {
  degree.innerHTML = this.value;
}

function setGradient() {
    bodybg.style.background = `linear-gradient(${slider.value}deg, ${color1.value}, ${color2.value})`;
    copyCode.textContent = `linear-gradient(${slider.value}deg, ${color1.value}, ${color2.value})`;
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);