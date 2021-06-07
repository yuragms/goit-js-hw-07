

const AllTagsInTitleList = document.querySelectorAll('.item');

for (const element of AllTagsInTitleList) {
    console.log('Категория:', element.querySelector('h2').textContent);
    console.log('Количство элементов:', element.querySelectorAll('li').length);
  };


