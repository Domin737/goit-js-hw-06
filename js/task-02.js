const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

// Utwórz tablicę elementów li na podstawie tablicy ingredients
const elements = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

// Dodaj wszystkie elementy li do listy ul#ingredients
ingredientsList.append(...elements);
