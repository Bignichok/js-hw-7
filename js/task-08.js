const counterInput = document.querySelector(".counter-input");
const renderButton = document.querySelector('button[data-action="render"]');
const destroyButton = document.querySelector('button[data-action="destroy"]');
const boxesContainer = document.querySelector("#boxes");

const randomRgbColor = () => {
  const color = Math.floor(Math.random() * 16777216).toString(16);

  return "#000000".slice(0, -color.length) + color;
};

const createBoxes = function (amount) {
  const boxes = [];
  const basicSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const color = randomRgbColor();
    const size = basicSize + i * 10;
    const box = document.createElement("div");
    box.style.cssText = `width:${size}px; height:${size}px; background-color: ${color}`;
    boxes.push(box);
  }

  return boxesContainer.append(...boxes);
};

const destroyBoxes = function () {
  if (boxesContainer.children.length > 0) {
    boxesContainer.innerHTML = "";
  }
};

const getAmount = function () {
  const amount = +counterInput.value;
  if (amount > 0) {
    createBoxes(amount);
  }
};

renderButton.addEventListener("click", getAmount);
destroyButton.addEventListener("click", destroyBoxes);
