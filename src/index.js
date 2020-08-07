document.addEventListener("DOMContentLoaded", () => {

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function dogImgHandler(){
    function fetchDogImg(url) {
        fetch(url)
        .then(response => response.json())
        .then(json => addImgToDom(json));
    };

    function addImgToDom(imgs){
        let imgContainer = document.getElementById("dog-image-container");
        let imgsArray = imgs.message;

        for (const img of imgsArray){
        let imgFrame = document.createElement("img");
        imgFrame.width = "100";
        imgFrame.setAttribute("src", img);
        imgContainer.append(imgFrame);
        };
    };
    fetchDogImg(imgUrl)
};

function dogBreedHandler(){
    function fetchDogBreed(url) {
        fetch(url)
        .then(response => response.json())
        .then(json => addBreedToDom(json));
    };

    function addBreedToDom(breeds){
        let breedUl = document.getElementById("dog-breeds");
        let breedsObj = breeds.message;

        for (const breed in breedsObj) {
            breedLi = document.createElement("li");
            breedLi.classList.add("dog-breed")
            breedLi.style.color = "black"
            breedLi.innerText = breed + `: ${breedsObj[breed]}`;
            breedUl.append(breedLi)
        };
    };
    fetchDogBreed(breedUrl)
};

function changeColor(){
    document.addEventListener("click", (e) => {
        if (e.target.matches(".dog-breed") && e.target.style.color === "black"){
            let breedLi = e.target
            breedLi.style.color = "red"
        } else if (e.target.matches(".dog-breed") && e.target.style.color === "red"){
            let breedLi = e.target
            breedLi.style.color = "black"
        };
    });


};

function filterNames(){
    const dropdown = document.querySelector("#breed-dropdown")
    dropdown.addEventListener("change", (e) => {
    const letter = e.target.value
    const breeds = document.querySelectorAll("li.dog-breed")
    for (ele of breeds){
        if (ele.innerText[0] != letter){
            ele.style.display="none"
        } else {
            ele.style.display="block"
        };
    };
});
};


filterNames();
changeColor();
dogBreedHandler();
dogImgHandler();

});