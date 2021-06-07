const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  // console.log(validationInput.getAttribute('data-length'));
  // console.log(event.currentTarget.value.length);
  if (
    Number(validationInput.getAttribute("data-length")) ===
    event.currentTarget.value.length
  ) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}
