var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
window.addEventListener("load", changeGradient);
button.addEventListener("click", randomColour);

function changeGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	colourText();
}

function colourText() {
	css.textContent = body.style.background + ";";
}

function randomColour() {
	var x = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	var y = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	body.style.background = "linear-gradient(to right, " + x + ", " + y + ")";
	colourText();
}