

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// deliverable 1

document.addEventListener("DOMContentLoaded", function() { 
    fetch(imgUrl)
    .then(resp=>resp.json())
    .then(dogs =>  { let allDogs = dogs.message; allDogs.forEach(dog=>{renderDog(dog)}
    )}
    )    
})

function renderDog(dog) {
let img = document.createElement("img")
let div = document.querySelector("#dog-image-container")
div.appendChild(img)
img.src = dog
}

 // deliverable 2, 3

document.addEventListener("DOMContentLoaded", function() {
    updateBreeds();
    fetch(breedUrl)
    .then(resp=>resp.json())
    .then(breeds =>  { let allBreeds = breeds.message; 
         for(const i in allBreeds) { 
             let breed = `${i} : ${allBreeds[i]}`; 
             renderBreed(breed) 
            } }   
) } )
       
 function renderBreed(breed) {
    let li = document.createElement("li")
    let ul = document.querySelector("#dog-breeds");
    ul.appendChild(li)
    li.innerHTML = breed
    li.addEventListener("click", function(e) {e.target.style.color = "blue"})
} 

// deliverable 4 (not done)

function updateBreeds(){
let dropdown = document.querySelector('#breed-dropdown');
dropdown.addEventListener('change', function (e) { let option = e.target; changeContent(option)

})
} 

//  function changeContent(option) { 
//         let li = document.getElementsByTagName("li")
//         for (let i=0; i < li.length; i++) {
//      if (li[i].innerHTML[0] !== option[1].innerHTML) { li[i].innerHTML.style.color = "red"}
//   } }
      
    
 


    
    

  
    


