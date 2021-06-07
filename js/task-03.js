const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const makeImageItemtemplate = picture => {
console.log(picture);

return `<li><img src=${picture.url} alt="${picture.alt}"></li>`;


  };
  
  const makeImagesItems = images.map(makeImageItemtemplate).join('');
  console.log(makeImagesItems);

  const listImages = document.querySelector('#gallery');
  

  listImages.insertAdjacentHTML('afterbegin' , makeImagesItems);
  