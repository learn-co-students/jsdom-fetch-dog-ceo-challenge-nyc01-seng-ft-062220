console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {

    const getDogImages = async () => {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

        let response = await fetch(imgUrl);
        let data = await response.json();
        let images = await data.message
        renderDogImages(images);
    }

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
        console.log(dogImagesContainer);
    }







    getDogImages();
})

