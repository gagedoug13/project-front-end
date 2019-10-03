const body = document.body

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


fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(createCards)