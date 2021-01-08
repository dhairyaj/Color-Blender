const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const bodybg = document.getElementById('bodybg');
const copyCode = document.getElementById('copyCode');
const slider = document.getElementById('linearDegree');
const degree = document.getElementById('degreeValue');
const orientationSelect = document.getElementById('orientationSelect');
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

    bodybg.style.background = `linear-gradient(${slider.value}deg, ${color1.value}, ${color2.value})`;
    copyCode.textContent = `linear-gradient(${slider.value}deg, ${color1.value}, ${color2.value})`;

  } else if(orientationSelect.value == 1) {

    bodybg.style.background = `radial-gradient(${color1.value}, ${color2.value})`;
    copyCode.textContent = `radial-gradient(${color1.value}, ${color2.value})`;

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