const catImage = document.getElementById('cat-img');
const dogImage = document.getElementById('dog-img');
const catButton = document.getElementById('btn-cat');
const dogButton = document.getElementById('btn-dog');
  
catButton.addEventListener('click', fetchCatImage);
dogButton.addEventListener('click', fetchDogImage);

function fetchCatImage() {
  fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then(data => {
      catImage.innerHTML = `<img src="${data.file}"/>`;
  })  
}

function fetchDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      dogImage.innerHTML = `<img src="${data.message}"/>`;
  }) 
}