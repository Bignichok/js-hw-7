const ingredientsList = document.querySelector("#ingredients");
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

ingredients.forEach((element) => {
  const ingredientsListItem = document.createElement("li");
  ingredientsListItem.textContent = element;
  ingredientsList.appendChild(ingredientsListItem);
});
ingredientsList.classList.add("answer");
