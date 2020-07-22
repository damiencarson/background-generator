(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
