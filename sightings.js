// let searchParams = new URLSearchParams(window.location.search)
// let query = searchParams.get("id")
const body = document.body

function createCard(sightings){
    let div = document.createElement("div")
    div.className = "sightingCards"

    sightings.forEach(sighting =>{
    let divCard = document.createElement("div")
    divCard.className = "eachSightingCard"
   let p1 = document.createElement("p")
   let p2 = document.createElement("p")
   let p3 = document.createElement("p")
   let p4 = document.createElement("p")
   let photo = document.createElement("IMG")


   console.log(sighting.user_id)

   p1.innerText = `${sighting.user.name} saw`
   p2.innerText = `the ${sighting.animal.name} at`
   p3.innerText = `${sighting.location.name}.`
   p4.innerText = `\n Story Notes: ${sighting.story}`
   photo.src = `${sighting.animal.image}`
   
   divCard.append(p1, p2, p3, p4, photo)
   div.appendChild(divCard)
    })
   body.appendChild(div)
}

function createAnimalOption(animals){
   let animalDropdown = document.getElementById("animal-dropdown")
   animals.forEach(animal =>{
       let option = document.createElement("option")
       option.innerText = animal.name
       option.value = animal.id
       animalDropdown.appendChild(option)

   })

}

function createLocationOption(locations){
   let locationDropdown = document.getElementById("location-dropdown")
   locations.forEach(location =>{
       let option = document.createElement("option")
       option.innerText = location.name
       option.value = location.id
       locationDropdown.appendChild(option)

   })

}
function createUserOption(users){
   let userDropdown = document.getElementById("user-dropdown")
   users.forEach(user =>{
       let option = document.createElement("option")
       option.innerText = user.name
       option.value = user.id
       userDropdown.appendChild(option)
   })

}


fetch (`http://localhost:3000/sightings`)
   .then(response => response.json())
   .then(createCard)

   
fetch(`http://localhost:3000/animals`)
   .then(response => response.json())
   .then(createAnimalOption)

fetch(`http://localhost:3000/locations`)
   .then(response => response.json())
   .then(createLocationOption)

fetch(`http://localhost:3000/users`)
   .then(response => response.json())
   .then(createUserOption)