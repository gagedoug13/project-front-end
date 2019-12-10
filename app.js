const body = document.body
const logo = document.querySelector(".logo")

function createCards(users){
    let div = document.createElement("div")
    div.className = "cards"

    users.forEach(user => {
        let userName = document.createElement("a")
        div.className="userName"
        userName.href = `users.html?id=${user.id}`
        userName.innerText = `${user.name}\n`

        div.append(userName)
        div.append(userName)
    })
 body.append(div)
}

logo.addEventListener("mouseenter", (event)=> {
    event.target.classList.toggle("background")
})
logo.addEventListener("mouseleave", (event)=> {
    event.target.classList.toggle("background")
})

fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(createCards)