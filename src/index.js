console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", function(){

    loadingRandomPictures();
    loadingDogBreeds();


    document.addEventListener("click", function(e){
        if( e.target.localName === "li"){
        e.target.style.color = "pink"}
        if( e.target.localName === "select"){
            filteredDogBreeds(e.target)}
    })

    












    function loadingRandomPictures(){

        fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function(response){
            return response.json()
        })
        .then(function(object){
            const container = document.getElementById("dog-image-container")
            for(let i = 0; i < object.message.length;i++){
                let img = document.createElement("img");
                img.src = object.message[i]
                container.appendChild(img)
            }
        })
        //the end of the loadingThePage function.
    }

    function loadingDogBreeds(){

        fetch("https://dog.ceo/api/breeds/list/all")
        .then(function(response){
            return response.json()
        })
        .then(function(object){
            const ul = document.getElementById("dog-breeds")
            for(let i = 0; i < Object.keys(object.message).length;i++){
                let breed = Object.keys(object.message)[i]
                let li = document.createElement("li")
                li.textContent = breed;
                if  (object.message[breed].length >0){
                    let subUL = document.createElement("ul")
                    for (let x = 0; x < object.message[breed].length; x++){
                    let subLI = document.createElement("li")
                    subLI.textContent = object.message[breed][x]
                    subUL.appendChild(subLI)
                    //end of sub loop
                    }
                    li.appendChild(subUL)
                }
                ul.appendChild(li)


                //end of the initial loop
            }
        })
        //the end of the loadingThePage function.
    }


    function filteredDogBreeds(e){

        fetch("https://dog.ceo/api/breeds/list/all")
        .then(function(response){
            return response.json()
        })
        .then(function(object){
            const ul = document.getElementById("dog-breeds")
            ul.innerHTML = "";
            const unfilteredDogs =  Object.keys(object.message)
            const dogs = unfilteredDogs.filter(filterByLetter)
            
            
            for(let i = 0; i < dogs.length;i++){
                let breed = dogs[i]
                let li = document.createElement("li")
                li.textContent = breed;
                if  (object.message[breed].length >0){
                    let subUL = document.createElement("ul")
                    for (let x = 0; x < object.message[breed].length; x++){
                    let subLI = document.createElement("li")
                    subLI.textContent = object.message[breed][x]
                    subUL.appendChild(subLI)
                    //end of sub loop
                    }
                    li.appendChild(subUL)
                }
                ul.appendChild(li)


                //end of the initial loop
            }
                    function filterByLetter(dog){
                        let letter = e.value;
                    
                       return dog.charAt(0) == letter
                
                    }
        })
        //the end of the loadingThePage function.
    }




    
    






    // this is the end of the event listener
})