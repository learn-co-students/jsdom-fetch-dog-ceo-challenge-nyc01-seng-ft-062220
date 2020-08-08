console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", (event) => {
    const dogImageContainer = document.getElementById("dog-image-container");
    const breedDropdown = document.getElementById("breed-dropdown");
    const dogBreedList = document.getElementById("dog-breeds")
    let dogBreeds = {}
    
    const getDogs = () => {
        fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(response => response.json())
        .then(response => response.message.forEach(addImg))
    };

    const addImg = (url) => {
        const dogImage = document.createElement('img');
        dogImage.src = url;
        dogImageContainer.append(dogImage);
    };

    const getBreeds = () => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(response => {
                let breeds = Object.keys(response.message)
                dogBreeds = breeds
                // for each breed, add breed
                breeds.forEach(addBreed)
            })
    };

    const addBreed = (breed) => {
        const dogBreed = document.createElement("li")
        dogBreed.classList.add("dog-breed")
        dogBreed.innerText = breed
        dogBreedList.append(dogBreed)
        dogBreed.addEventListener("click", changeColor)
    }


    const changeColor = (e) => {
        e.target.style.color = "red"
    }



    breedDropdown.addEventListener("change", (e) => {
        const letter = e.target.value;
        const filterDogs = dogBreeds.filter(word => word[0] === letter);
        dogBreedList.innerHTML = "";
        filterDogs.forEach(addBreed);
    })


    
    getDogs()
    getBreeds()

});

    // make a shit to put the image in
    // append that shit to the div 
