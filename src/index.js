// console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {

    let dogBreedsObj = {};

    const getDogImages = async () => {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

        console.log("await starts")
        let response = await fetch(imgUrl);
        let data = await response.json();
        console.log("await ends")
        let images = data.message

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

        console.log("await starts")
        let response = await fetch(breedUrl);
        let data = await response.json();
        let breeds = data.message;
        console.log("await ends")

        dogBreedsObj = breeds;


        //renderDogBreeds();
    }

    const renderDogBreeds = (dogBreedsObj) => {
        //? does this need to an async iterator 'for async'?
        for (const breed of dogBreedsObj) {
            renderDogBreed(breed);
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

    // Challenge 3

    const clickHandler = () => {
        const dogBreedsUl = document.querySelector("#dog-breeds")

        dogBreedsUl.addEventListener("click", e => {
            if (e.target.matches("#dog-breeds > li")) {
                toggleColor(e.target);
            }
        })   
        
        dogBreedsUl.addEventListener("mouseover", e => {
            if (e.target.matches("#dog-breeds > li")) {
                toggleColor(e.target);
            }
            // reset the color after a short delay
            setTimeout(function() {
                e.target.style.color = "";
            }, 500);
        }, false)
    }

    const toggleColor = (eTarget) => {
        switch (eTarget.style.color) {
            case "purple":
                eTarget.style.color = "";
                break;
            default:
                eTarget.style.color = "purple"
                break;
        }
    }   

    // Challenge 4

    const breedDropdown = document.querySelector("#breed-dropdown");

    const onChangeHandler = () => {
        
        breedDropdown.addEventListener("change", e => {
            if (e.target.value === "all"){
                    console.log("success")
                    console.log(dogBreedsObj)
                    clearRenderedContent();
                    renderDogBreeds(Object.keys(dogBreedsObj))
            } else {
                    let filteredByLetter = Object.keys(dogBreedsObj).filter(breed => breed[0] === e.target.value);
                    clearRenderedContent();
                    renderDogBreeds(filteredByLetter);
            }            


            //console.log(filteredByLetter);
            //debugger; 



            // for (const breed in dogBreedsObj) {
            //     const breedLetter = breed[0]
            //     console.log(breedLetter)
            //     switch(breedLetter) {
            //         case "a":
            //             console.log("A CASE");
            //             renderDogBreed(breed);
            //         default:
            //             console.log("DEFAULT")
            //             //renderDogBreed(breed);
            //             break;
            //     }
            // }


            // switch (e.target.value) {
            //     case "a":

            //         break;
            //     case "b":

            //         break;
            //     case "c":

            //         break;
            //     case "d":

            //         break;
            // }

        })
    }

    const clearRenderedContent = () => {
        debugger;
        dogBreedsUl.querySelectorAll('li').forEach(ul => ul.remove());
    }
    

    getDogImages();
    getDogBreeds();
    clickHandler();
    onChangeHandler();
})


/* 

Challenge 4--
* enable filtering of index page based on dropbox
    -- is this a form of "listener" based on the dropdown selection?
    -- probably not formally, but conditional logic can be added... where? and how should this trigger the rendering of index?


MISC TASKS IF EXTRA TIME:
-- Expand the dropdown menu through by iterating from my exisiting list // or just iterate to complete alphabet and use conditional logic to filter
-- Add hover color change to challenge 3's deliverable
-- Should I (and how should I) expand the nested breed types to display on UL (e.g., should it prepend or append the main key or be it's own "breed-type")?
-- CSS Formatting: is there an easy way to sync up the width and height of CSS flex?


*/
