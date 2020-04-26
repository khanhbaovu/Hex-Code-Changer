
const button = document.querySelector("button");

const body = document.querySelector("body");

const codes = ["#6C1AE3", "#80E956", "#92BB53", "#DBC7FA", "#85E179", "#407902", "#FFF633", "#FF9633"];

body.style.backgroundColor = "#D3D3D3";

button.addEventListener(click, "codeChange");

function codeChange() {
  const ranNum = parseInt(Math.random()*codes.length);
  document.getElementById('hexCode').innerHTML = codes[ranNum];
  document.body.style.backgroundColor = codes[ranNum];
}
