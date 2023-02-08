let hexaNumber = document.getElementById("hexaNumber");
let color = document.getElementById("color");

color.addEventListener("input", () => {
  let inputColor = color.value;
  hexaNumber.value = inputColor;
  document.getElementById("body").style.backgroundColor = inputColor;
});
