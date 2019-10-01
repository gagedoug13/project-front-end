const body = document.body

function createCards(users){
    let div = document.createElement("div")
    div.classname = "cards"

    users.forEach(user => {
        let p = document.createElement("p")
        let a = document.createElement("a")

        a.href = `users.html?id=${user.id}`
        a.innerText = `${user.name}`


        div.append(a)
    })
 body.append(div)


}


fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(createCards)