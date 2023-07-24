const validationInput = document.querySelector("#validation-input");
const requiredLength = Number(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", (event) => {
  const inputValueLength = event.target.value.length;

  if (inputValueLength === requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
