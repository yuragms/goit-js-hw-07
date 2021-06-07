const inputValue = document.querySelector('#name-input');
const spanValue = document.querySelector('#name-output');

inputValue.addEventListener( 'input', onInputChange);

function onInputChange(event) {
    
    spanValue.textContent = event.currentTarget.value;
    if(!spanValue.textContent ) { spanValue.textContent = 'незнакомец'};
}


