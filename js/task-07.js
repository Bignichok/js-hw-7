const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  let newSize = event.target.value;
  text.style.fontSize = `${newSize}px`;
});
