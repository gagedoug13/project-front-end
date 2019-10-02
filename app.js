const body = document.body

function createCards(users){
    let div = document.createElement("div")
    div.className = "cards"

    users.forEach(user => {
        let a = document.createElement("a")
        
        a.href = `users.html?id=${user.id}`
        a.innerText = `${user.name}\n`

        div.append(a)
    })
 body.append(div)


}


fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(createCards)