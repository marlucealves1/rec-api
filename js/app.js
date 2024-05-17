const urlBase  = "https://api.github.com/users/marlucealves1";
document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.github.com/users/marlucealves1")
    .then(response => response.json())
    .then(data => {
        console.log("https://avatars.githubusercontent.com/u/159350143?v=4")
        const perfilDiv = document.getElementById('perfil')
        perfilDiv.innerHTML += `
            <h2 class="nome">${data.name}</h2>
            <img class="perfil-img" src="${data.avatar_url}" alt="Avatar">
            <p class="bio">${data.bio}</p>
        `

        fetch(data.followers_url)
            .then(response => response.json())
            .then(followersData => {
                const listaSeguidoresDiv = document.getElementById('listaSeguidores')
                followersData.forEach(follower => {
                    listaSeguidoresDiv.innerHTML += `
                        <div class="seguidor">
                            <img src="${follower.avatar_url}" alt="Avatar">
                        </div>
                    `
                })
            })
            .catch(error => console.log(error('Erro ao carregar:', error)))
    })
    .catch(error => console.log(error))
})
