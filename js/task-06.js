const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onInputBlur);

function addClass (x) {
  validationInput.classList.add(x);
}

function removeClass (x) {
  validationInput.classList.remove(x);
}

function onInputBlur(event) {
  // console.log(validationInput.getAttribute('data-length'));
  // console.log(event.currentTarget.value.length);
  if (
    Number(validationInput.getAttribute("data-length")) ===
    event.currentTarget.value.length
  ) {
    addClass('valid');
    removeClass('invalid');
  } else {
    removeClass('valid');
    addClass('invalid');
  }
}


// validationInput.addEventListener("blur", onInputBlur);

// function onInputBlur(event) {
//   // console.log(validationInput.getAttribute('data-length'));
//   // console.log(event.currentTarget.value.length);
//   if (
//     Number(validationInput.getAttribute("data-length")) ===
//     event.currentTarget.value.length
//   ) {
//     validationInput.classList.add("valid");
//     validationInput.classList.remove("invalid");
//   } else {
//     validationInput.classList.remove("valid");
//     validationInput.classList.add("invalid");
//   }
// }
