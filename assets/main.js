const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const bodybg = document.getElementById('bodybg');
const copyCode = document.getElementById('copyCode');
const slider = document.getElementById('linearDegree');
const degree = document.getElementById('degreeValue');
const orientationSelect = document.getElementById('orientationSelect');
const colortext1 = document.getElementById('color1text');
const colortext2 = document.getElementById('color2text');
degree.innerHTML = slider.value;

// slider.oninput = function() {
//   degree.innerHTML = this.value;
// }

function setGradient() {

    // slider.oninput = function() {
    //   degree.innerHTML = this.value;
    // }

    // bodybg.style.background = `linear-gradient(${slider.value}deg, ${color1.value}, ${color2.value})`;
    // copyCode.textContent = `linear-gradient(${slider.value}deg, ${color1.value}, ${color2.value})`;

  if(orientationSelect.value == 0) {

    slider.oninput = function() {
      degree.innerHTML = this.value;
    }
    colortext1.textContent = color1.value.toString().toUpperCase();
    colortext2.textContent = color2.value.toString().toUpperCase();;
    bodybg.style.background = `linear-gradient(${slider.value}deg, ${color1.value.toString().toUpperCase()}, ${color2.value.toString().toUpperCase()})`;
    copyCode.textContent = `linear-gradient(${slider.value}deg, ${color1.value.toString().toUpperCase()}, ${color2.value.toString().toUpperCase()})`;

  } else if(orientationSelect.value == 1) {
    colortext1.textContent = color1.value;
    colortext2.textContent = color2.value;
    bodybg.style.background = `radial-gradient(${color1.value.toString().toUpperCase()}, ${color2.value.toString().toUpperCase()})`;
    copyCode.textContent = `radial-gradient(${color1.value.toString().toUpperCase()}, ${color2.value.toString().toUpperCase()})`;

  }

}

function showDiv(divId, element)
{
    document.getElementById(divId).style.display = element.value == 0 ? 'block' : 'none';
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
slider.addEventListener('input', setGradient);
orientationSelect.addEventListener('input', setGradient);