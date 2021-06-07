const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const elements = [];
 for (const ingredient of ingredients) {
 const item = document.createElement('li');
 item.textContent = ingredient; 
 elements.push(item);
};

const list = document.querySelector('#ingredients');
list.append(...elements); 