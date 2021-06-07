const textChange = document.querySelector("#text");
const range = document.querySelector("#font-size-control");

range.addEventListener("input", handleChangeRange);

function handleChangeRange (event) {
    textChange.style.fontSize = event.currentTarget.value+'%';
    // console.log(event.currentTarget.value+'%');

}


// console.log(textChange.style.fontSize);
// console.log(range.dataset);