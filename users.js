let searchParams = new URLSearchParams(window.location.search)
let query = searchParams.get("id")
const body = document.body
function createCard(user){
   let div = document.createElement("div")
   let p = document.createElement("p")

   div.className = "cards"
   p.innerText = `Welcome Back ${user.name}`
   
   div.append(p)
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


fetch (`http://localhost:3000/users/${query}`)
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