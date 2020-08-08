// console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {

    const getDogImages = async () => {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

        let response = await fetch(imgUrl);
        let data = await response.json();
        let images = await data.message;

        renderDogImages(images);
    }

    // TODO-- Refactor this to accept a callback function on line 16 as practice as theoretical helper function;
    const renderDogImages = (images) => {
        images.forEach(image => {renderDogImage(image)})
    }

    const dogImagesContainer = document.querySelector("#dog-image-container");
    dogImagesContainer.classList.add("row");

    const renderDogImage = (image) => {
        const frag = document.createDocumentFragment();
        const dogImageCol = document.createElement("div");
        const img = document.createElement("img");

        dogImageCol.classList.add("column");
        frag.appendChild(dogImageCol)
        img.src = image; 
        img.setAttribute("style", "width:100%");
        dogImageCol.appendChild(img)

        dogImagesContainer.appendChild(frag)
    }

    const getDogBreeds = async () => {
        const breedUrl = "https://dog.ceo/api/breeds/list/all"

        let response = await fetch(breedUrl);
        let data = await response.json();;
        let breeds = await data.message

        renderDogBreeds(breeds);
    }

    const renderDogBreeds = (breedsObj) => {

        //console.log(breedsObj)

        for (const breed in breedsObj) {

            renderDogBreed(breed);
            // TODO - build simple algo to extract all breeds and types.
            // if (breedsObj[breed].length >= 1) {
            //     breedsObj[breed].forEach(nestedBreed => console.log)
            // } else {
            //     console.log(`${breed}`)
            // }
        }
    } 
    
    const dogBreedsUl = document.querySelector("#dog-breeds");

    const renderDogBreed = (breed) => {
        const frag = document.createDocumentFragment();
        const li = document.createElement("li");
        li.textContent = breed;
        frag.appendChild(li);

        dogBreedsUl.appendChild(frag)
    }

    
    getDogImages();
    getDogBreeds();
})

