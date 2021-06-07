{/* <div id="controls">
<input type="number" min="0" max="100" step="1" />
<button type="button" data-action="render">Создать</button>
<button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>
const incrementbutton = document.querySelector('button[data-action="increment"'); */}



const inputLabel = document.querySelector("input");
const createBut = document.querySelector('button[data-action="render"]');
const deleteBut = document.querySelector('button[data-action="destroy"]');
const blockdiv = document.querySelector('#boxes');

createBut.addEventListener('click', addDiv);

function addDiv () {
 let amount = inputLabel.value;

 for (let i = 0; i < amount; i += 1) {
    console.log(`<div>${amount}</div>`);
  }

console.log(`<div>${amount}</div>`);
};

