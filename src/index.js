//Initialize these apis
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//Main Event listener for loading the page
document.addEventListener("DOMContentLoaded", () => {
fetchImage()
fetchBreeds()
clickHandler()

.then(dogs => dogs.message.forEach(renderDogs))


//Click event delegation
function clickHandler(){
    // const dogBreedContainer = document.getElementById("dog-breeds")
    const breedSelector = document.querySelector("#breed-dropdown")

    breedSelector.addEventListener("change", e=>{
        const filterKey = e.target.value
        filterBreeds(filterKey)
       })

    document.addEventListener("mouseover", e =>{
        if(e.target.matches("#dog-breeds > li")){
        e.target.style.cursor = "pointer"
        }
    })

    document.addEventListener("click", e =>{
    if(e.target.matches("#dog-breeds > li")){
    // change the color
     e.target.style.color = "red"
    } 
    });


};

function filterBreeds(filterKey){
    const breedContainer = document.querySelector("#dog-breeds")
    for(const child of breedContainer.children){
        if(child.innerText[0] !== filterKey){
           child.style.display = "none"
        } else {
           child.style.display = "block"
        }
    }
 
}
//fetch the breeds
function fetchBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(resp => {
        Object.keys(resp.message).forEach(brd => addBreeds(brd))
        });
};
//add the breeds to the html(DOM)
function addBreeds(brd){
    const dogBreedContainer = document.getElementById("dog-breeds")
    const dogBreed = document.createElement("li")
    dogBreed.innerText = brd
    dogBreedContainer.append(dogBreed)
  };


//Fetch the images and iterate through them 
function fetchImage(){
 
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(resp => {
        resp.message.forEach(img => addImages(img))
        });
};

//helpfer function that adds the images to the HTML(DOM)
function addImages(img){
  const dogImgContainer = document.getElementById("dog-image-container")
  const dogImage = document.createElement("img")
  dogImage.src = img
  dogImgContainer.append(dogImage)
};


});






//Psuedocode and steps to complete this
//Make a call and get the images from the api
//Iterate through the images
//Add images that are being iterated through in another function to  add the image to the image to the dogContainer
//