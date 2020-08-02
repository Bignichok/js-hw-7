const buttonDecrement = document.querySelector(".button-decrement");
const buttonIncrement = document.querySelector(".button-increment");
const value = document.querySelector("#value");

const subtraction = (a, b) => a - b;
const add = (a, b) => a + b;

buttonDecrement.addEventListener("click", () => {
  value.textContent = subtraction(+value.textContent, 1);
});

buttonIncrement.addEventListener("click", () => {
  value.textContent = add(+value.textContent, 1);
});
