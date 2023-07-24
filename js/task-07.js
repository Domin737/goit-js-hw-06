const fontSizeControl = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  const fontSizeValue = event.target.value + "px";
  textElement.style.fontSize = fontSizeValue;
});
