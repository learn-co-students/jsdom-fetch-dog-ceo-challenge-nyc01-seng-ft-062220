document.addEventListener('DOMContentLoaded', e => {
console.log('%c HI', 'color: firebrick')

let breeds = [];

//give us a list of images from the API 
function fetchImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(result => {
        result.message.map( img => Addimage(img))
    });
}

//for each image use function to add
function Addimage(image){
    //add to dog-image-container using insertAdjacent 'afterend'
    const dogContainer = document.getElementById("dog-image-container");
    //also create a new element for img
    let newImageElement = document.createElement('img');
    // add that image onto the new element
    newImageElement.src = image
    //add the new element onto dog-image-container child node
    dogContainer.appendChild(newImageElement);
}


//breed options fetch
function fetchBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(result => {
        //grab only keys! 
        let breeds = Object.keys(result.message);
        //result.message.forEach( breed => addBreed(breed));
    })
    //.catch(console.log(`Error: ${error}`));
}

function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }

//for each breed add onto the ul list 
function addBreed(breed){
    //grab ul element
    let ul = document.getElementByIdName("dog-breeds")
    //create a new element for li 
    let li = document.createElement("li")
    //add the breed to the li 
    li.innerText = breed;
    li.style.cursor = 'pointer';
    //append the li element to ul
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
}

function updateColor(event) {
    event.target.style.color = 'palevioletred';
  }

//invoke functions
fetchImages()
fetchBreeds()

})