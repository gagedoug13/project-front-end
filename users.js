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
fetch(`http://localhost:3000/users/${query}`)
   .then(response => response.json())
   .then(createCard)