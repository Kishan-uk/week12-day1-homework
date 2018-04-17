document.addEventListener('DOMContentLoaded', () => {

const cats = document.querySelector('#cats');
cats.innerHTML = '';

const createImage = function(src, container){
  const image = document.createElement('img');
  image.src = src;
  container.appendChild(image);
  catImage.width = 500;
}
createImage('https://cdn.cnn.com/cnnnext/dam/assets/150901155126-new-zealand-flag-cat-garden-super-169.jpg', container);


//

// const ul = document.createElement('ul');
// const li = document.createElement('li');
//
// const catName = document.createElement('li');
// catName.textContent = 'Name: Dave';
//
// const catFood = document.createElement('li');
// catFood.textContent = 'Favourite food: Dog food';
//
// const catImage = document.createElement('img');
// catImage.src = 'https://cdn.cnn.com/cnnnext/dam/assets/150901155126-new-zealand-flag-cat-garden-super-169.jpg';
// catImage.width = 500
//
// cats.appendChild(ul);
// ul.appendChild(catName);
// ul.appendChild(catFood);
// ul.appendChild(li);
// li.appendChild(catImage);
//
 });
