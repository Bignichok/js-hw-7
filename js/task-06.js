const validationInput = document.querySelector("#validation-input");

const dataValue = +validationInput.attributes[2].value;
validationInput.addEventListener("blur", (event) => {
  const inputValue = event.target.value.length;

  if (inputValue === dataValue) {
    if (validationInput.classList.contains("invalid")) {
      validationInput.classList.remove("invalid");
      validationInput.classList.add("valid");
    } else {
      validationInput.classList.add("valid");
    }
  } else {
    validationInput.classList.add("invalid");
  }
});
