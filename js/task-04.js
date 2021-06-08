const decrementbutton = document.querySelector('button[data-action="decrement"]');
const incrementbutton = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');



incrementbutton.addEventListener('click', handleIncrementButtonClick);
decrementbutton.addEventListener('click', handleDecrementButtonClick);

function handleIncrementButtonClick() {
    let counterValueNum = Number(counterValue.textContent);
    return counterValue.textContent  = counterValueNum + 1;
    
};

function handleDecrementButtonClick() {
    
    return counterValue.textContent -= 1;
    
};


// const decrementbutton = document.querySelector('button[data-action="decrement"]');
// const incrementbutton = document.querySelector('button[data-action="increment"]');
// let counterValue = document.querySelector('#value').textContent;

// let valueContentnum = Number(counterValue);

// incrementbutton.addEventListener('click', handleIncrementButtonClick);
// decrementbutton.addEventListener('click', handleDecrementButtonClick);

// function handleIncrementButtonClick() {
    
//     valueContentnum += 1;
//     return document.querySelector('#value').textContent = valueContentnum;
    
// };

// function handleDecrementButtonClick() {
    
//     valueContentnum -= 1;
//     return document.querySelector('#value').textContent = valueContentnum;
    
// };