document.addEventListener("DOMContentLoaded", () => {
    console.log('%c HI', 'color: firebrick')

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    const getDogImages = () => {
        fetch(imgUrl)
        .then(response => response.json())
        .then(function(dogCollection) {
            renderDogs(dogCollection.message)
        })
        .catch(function(error) {
            console.log(error.message)
        });
    }

    const getDogBreeds = () => {
        fetch(breedUrl)
        .then(response => response.json())
        .then(function(dogBreeds) {
            // console.dir(dogBreeds.message)
            renderBreeds(dogBreeds.message)
        })
        .catch(function(error) {
            console.log(error.message)
        });
    }

    const clickHandler = () => {
        document.addEventListener("click", (e) => {
            if(e.target.matches("li.dog-breed")) {
                const breedClick = e.target
                changeFontColor(breedClick)
            }
        })
    }

    const selectHandler = () => {
        const selector = document.querySelector("#breed-dropdown")
        selector.addEventListener("change", (e) => {
            const letter = e.target.value
            const breeds = document.querySelectorAll("li.dog-breed")
            for (element of breeds) {
                if (element.innerText[0] != letter){ 
                    element.style.display="none"
                } else {
                    element.style.display="block"
                }
            }
        })
    }

    const resetBreeds = () => {
        const breeds = document.querySelectorAll("li.dog-breed")
        for (element of breeds) {
            if (element.innerText[0] != letter){ 
                element.style.display="block"
            }
        }
    }

    function changeFontColor(breedClick) {
        breedClick.style.color="red"
    }

    function renderDogs(dogCollection) {
        for (const element of dogCollection) {
            const dogImage = document.createElement("img")
            dogImage.src = element
            dogImage.className = "dog-avatar"
            document.querySelector("#dog-image-container").append(dogImage)
        }
    }

    function renderBreeds(dogBreeds) {
        for (const key in dogBreeds) {
            for (const element of dogBreeds[key]) {
                const dogBreed = document.createElement("li")
                dogBreed.className = "dog-breed"
                dogBreed.innerText = element + " " + key
                document.querySelector("#dog-breeds").append(dogBreed)
            }
        }
    }

    clickHandler()
    getDogImages()
    getDogBreeds()
    selectHandler()
})