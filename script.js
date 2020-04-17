
let codes = ["#6C1AE3", "#80E956", "#92BB53", "#DBC7FA", "#85E179", "#407902", "#FFF633", "#FF9633"];
document.body.style.backgroundColor = "#D3D3D3";

function codeChange() {
  let ranNum = parseInt(Math.random()*codes.length);
  document.getElementById('hexCode').innerHTML = codes[ranNum];
  document.body.style.backgroundColor = codes[ranNum];
}
