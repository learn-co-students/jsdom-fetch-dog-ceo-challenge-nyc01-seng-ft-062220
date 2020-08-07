console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(e) {
    const imgHolder = document.querySelector("#dog-image-container")
    const breedHolder = document.querySelector("#dog-breeds")
    
   const getImages = () => {
        fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(results => results.message.forEach(image => renderImage(image)))
        // .then(imageCollection => renderImages(imageCollection))
    }


    const getBreeds = () => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(response => {
            const breeds = response.message

            for (const key in breeds) {
                renderBreed(key)
            }

        } )
        // .then(results => results.message.forEach(breed => renderBreed(breed)))
        // .then(imageCollection => renderImages(imageCollection))
    }


    // function renderImages(imageCollection) {
    //     imageCollection.forEach(function(image){
    //         renderImage(image)
    //     });
    // }


    function renderBreed(breed) {
        const bullet = document.createElement("li")
        bullet.classList.add("breed")
        bullet.innerText = breed

        breedHolder.append(bullet)
    }


    function renderImage(image) {
        const img = document.createElement("img")
        img.classList.add("img")
        img.src = image

        imgHolder.append(img)
    }


    function selectHandler() {
        let droppy = document.querySelector("#breed-dropdown")  
        droppy.addEventListener("change", function(event) {
            const letter = event.target.value
            const breeds = document.querySelectorAll("li.breed")
            for (const breed of breeds) {
                if (breed.innerText[0] !== letter) {
                    breed.style.display = "none"
                } else {
                    breed.style.display = "block"
                }
            }
        })
    }

    selectHandler()
    getImages()
    getBreeds()
});



document.addEventListener("click", function(event) {
    if (event.target.matches("li")) {
        let listItem = event.target
        if  (listItem.id === "red") {
            listItem.style.color = "black"
            listItem.id = "black"
        } 
        
        else if (event.target.matches("li")) {
            listItem.style.color = "red"
            listItem.id = "red"
        } 
    }

})
    





