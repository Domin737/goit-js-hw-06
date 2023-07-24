// Znajdź element ul#categories
const categories = document.querySelector("#categories");

// Znajdź wszystkie elementy li.item wewnątrz ul#categories
const items = categories.querySelectorAll(".item");

// Wypisz liczbę kategorii
console.log(`Number of categories: ${items.length}`);

// Dla każdego elementu li.item
items.forEach((item) => {
  // Znajdź tekst w elemencie h2
  const categoryName = item.querySelector("h2").textContent;

  // Znajdź liczbę elementów li wewnątrz tego elementu
  const elementsCount = item.querySelectorAll("li").length;

  // Wypisz wyniki w konsoli
  console.log(`\nCategory: ${categoryName}\nElements: ${elementsCount}`);
});
