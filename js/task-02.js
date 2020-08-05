const ingredientsList = document.querySelector("#ingredients");
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createHtml = ingredients.map((element) => {
  const ingredientsListItem = document.createElement("li");
  ingredientsListItem.textContent = element;
  return ingredientsListItem;
});

ingredientsList.append(...createHtml);
ingredientsList.classList.add("answer");
