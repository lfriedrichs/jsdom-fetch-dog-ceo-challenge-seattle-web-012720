console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const dogBreeds = [];


document.addEventListener("DOMContentLoaded", function() {
    const imageSection = document.getElementById("dog-image-container");
    const breedSection = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");


    fetch(imgUrl).then(resp => resp.json()).then(dogs => {
        for (const dog of dogs.message) {
            const div = document.createElement('div');
            const image = document.createElement('img');
            image.src = dog;
            div.appendChild(image);
            imageSection.appendChild(div);
        }
    })

    fetch(breedUrl).then(resp => resp.json()).then(breeds => {
        for (const breed in breeds.message) {
            dogBreeds.push(breed)
            const dogBreed = document.createElement('li');
            dogBreed.innerText = breed;
            dogBreed.addEventListener("click", function() {
                this.style.color = "blue";
            })
            breedSection.appendChild(dogBreed);
        }
    })

    document.getElementById("breed-dropdown").addEventListener('change', function() {
        for (const child of breedSection.children) {
            if (child.innerText[0] == breedDropdown.value) {
                child.style.display = "block";
            } else {
                child.style.display = "none";
            }
        } 
    })
})