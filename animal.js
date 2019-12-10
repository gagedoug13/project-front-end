const body = document.body

function createCard(animals){
    let div = document.createElement("div")
    div.className = "animalCards"

    animals.forEach(animal =>{
       
    let divCard = document.createElement("div")
    divCard.className = "eachAnimalCard"

    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let photo = document.createElement("IMG")
    photo.className = "animalPhotos"

   p1.innerText = `${animal.name}\n`
   p2.innerText = `\n${animal.description}`
   photo.src = `${animal.image}`
   
   divCard.append(p1, p2, photo)
   div.appendChild(divCard)
    })
   body.appendChild(div)
}

fetch(`http://localhost:3000/animals`)
   .then(response => response.json())
   .then(createCard)
