var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
} 

const value = document.querySelector("#value");
const input = document.querySelector("#myRange");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

let setColor = (el) => {
    el.style.animationDelay = `-${el.value}s`;
  el.style.background = `linear-gradient(90deg, currentColor ${el.value}%, rgba(0,0,0,0.1) ${el.value}%)`;
};
