var css = document.getElementById("css");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomColor");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomColorClick(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	changeBackground();
}

function changeBackground() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function initGradient() {
	color1.value = "#ff0000";
	color2.value = "#ffff00";

	changeBackground();

}

function setGradient() {
	changeBackground();
}

initGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColorClick	);