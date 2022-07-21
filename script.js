const btn = document.getElementById("search-btn")
const query = document.getElementById("search")
const card = document.querySelector(".card")
const bio = document.getElementById("bio")

function getData(){
    const name = query.value
    fetch(`https://api.github.com/users/${name}`)
    .then(res=>res.json())
    .then(user=>{
    console.log(user)
    
    const avatar = document.getElementById("avatar-img")
    avatar.innerHTML = `<img src ="${user.avatar_url}"/>`

    document.getElementById("name").innerText = user.name
    document.getElementById("followers").innerText = `FOLLOWERS : ${user.followers}`
    document.getElementById("following").innerHTML = `FOLLOWING : ${user.following}`
    document.getElementById("bio").innerText = user.bio

   card.style.display = "flex"
  
    } )
}


btn.addEventListener("click",getData)