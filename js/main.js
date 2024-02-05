let movieContainer = document.querySelector(".movie-container");


let squareEyes = fetch("https://api.noroff.dev/api/v1/square-eyes")
    .then(function (getResponse) {
        return getResponse.json();
    })
    .then(result => {
        let movies = result;
        for(var i = 0; i < movies.length; i++){
            movieContainer.innerHTML += `
            <div> 
            <img src="${movies[i].image}">
            </div>`
        }
    }); 
