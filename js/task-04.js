const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElement = document.querySelector("#value");

let counterValue = 0;

// Funkcja aktualizująca widok licznika
function updateValue() {
  valueElement.textContent = counterValue;
}

// Nasłuchiwacz zdarzeń dla przycisku decrement
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateValue();
});

// Nasłuchiwacz zdarzeń dla przycisku increment
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateValue();
});
