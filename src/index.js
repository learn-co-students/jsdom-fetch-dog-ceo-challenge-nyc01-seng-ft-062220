document.addEventListener(`DOMContentLoaded`, e => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dogImageContainer = document.querySelector(`#dog-image-container`)
    const dogBreedsUl = document.querySelector(`#dog-breeds`)
    const dropDown = document.querySelector(`#breed-dropdown`)
   
    dropDown.addEventListener(`change`, e => { 
        const letter = e.target.value
        const breedLiTags = document.querySelectorAll(`#dog-breeds li`)

        for (const breedTag of breedLiTags) {
            const breedText = breedTag.innerText
            breedTag.style.display = `block`
            if (!breedText.startsWith(letter)) {
                breedTag.style.display = `none`
            }
        }
    })

    document.addEventListener(`click`, e => {
        if (e.target.matches(`li`)) {
            e.target.style.color = `purple`
        }
    })
    
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(resp => {
        for (const imageUrl of resp.message) {
            const newImageTag = document.createElement(`img`)
            newImageTag.src= imageUrl
            dogImageContainer.append(newImageTag)
        }
    })
    
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(resp => {
        const nestedBreedData = resp.message
        for (const key in nestedBreedData) {
            for(const breed of nestedBreedData[key]) {
                const dogBreedLi = document.createElement(`li`)
                dogBreedLi.innerText = breed
                dogBreedsUl.append(dogBreedLi)
            }
        }
    })
})