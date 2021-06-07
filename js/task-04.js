const decrementbutton = document.querySelector('button[data-action="decrement"]');
const incrementbutton = document.querySelector('button[data-action="increment"]');
let counterValue = document.querySelector('#value').textContent;

let valueContentnum = Number(counterValue);

incrementbutton.addEventListener('click', handleIncrementButtonClick);
decrementbutton.addEventListener('click', handleDecrementButtonClick);

function handleIncrementButtonClick() {
    
    valueContentnum += 1;
    return document.querySelector('#value').textContent = valueContentnum;
    
};

function handleDecrementButtonClick() {
    
    valueContentnum -= 1;
    return document.querySelector('#value').textContent = valueContentnum;
    
};