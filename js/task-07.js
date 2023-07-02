const inputElements = document.getElementById("font-size-control");
const textElements = document.getElementById("text");
inputElements.addEventListener("input", function () {
  textElements.style.fontSize = inputElements.value + "px";
});