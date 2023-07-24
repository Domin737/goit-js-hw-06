function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  // Zmień kolor tła elementu <body>
  document.body.style.backgroundColor = randomColor;

  // Ustaw tekst elementu span.color na wartość wygenerowanego koloru
  colorSpan.textContent = randomColor;
});
