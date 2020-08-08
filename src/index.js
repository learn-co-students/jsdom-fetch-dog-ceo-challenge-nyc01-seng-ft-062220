console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', (event) => {
    // cors issue resolved with heroku 
    let dogsArray = []

        fetch("https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/image/random/4")
            .then(response => response.json())
            .then(dog => {
                for (let d = 0; d < dog.message.length; d++) {
                    dogList(dog.message[d]) 
                }
            })
            
            function dogList(dog) { 
            
                let dogImages = document.getElementById("dog-image-container")
                let dogLi = document.createElement("li") 
                let dogImg = document.createElement("img")
                dogImg.src = dog
            
                dogLi.appendChild(dogImg)
                dogImages.append(dogLi)
             
            }
    
        //challenge 1 complete 
// the loop make d =0 and make it count up. d then gets set equal to the attributes in the array dog.message. it then increments by 1 
// the function doglist is given the argument dog.message which is an array and goes through each index. d starts from 0 ends at 4. 
// challenge 2 fetch the dogs breed url and don't make another function for it since it's inside DOMContentloaded
// Asynchrocity: javascript is synchronous meaning it always loads everything simultaneously, so by using .then it takes breaks before loading the next method so that it doesn't for example parse unloaded data
    
    

        fetch("https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/list/all")
            .then(response => response.json())
            .then(response => {
                let breed = Object.keys(response.message)
                dogsArray = breed
                breed.forEach(breedList)
                
                
            })
            
            function breedList(dogsArray) {
                let breedList = document.getElementById("dog-breeds")
                const breedLi = document.createElement("li")
                breedLi.innerText = dogsArray 
                breedList.append(breedLi)
                breedLi.addEventListener("click", colorChange)
            }

            function colorChange(event) {
                event.target.style.color = 'green' 
            }

            function printBreeds() {
                const breedDropDown = document.getElementById('breed-dropdown') 
                breedDropDown.addEventListener('change', (e) => {
                  filterBreedsByLetter(e.target.value)
                })
              }
            
              function filterBreedsByLetter(letter) {
                breedList(dogsArray.filter(breed => breed.startsWith(letter)))
              }
            
              printBreeds()
              // places filtered Dogs on the bottom of the list need to find a way to remove the unselected dogs :/
            
        })