
const parameterString = window.location.search;
const searchParameter = new URLSearchParams(parameterString);
const movieId = searchParameter.get('id');
const movieContainer = document.getElementById('movie-container');

for (const parameter of searchParameter) {
    console.log(parameter)
}

console.log(movieId);


function fetchSingleMovie() {
    fetch("https://api.noroff.dev/api/v1/square-eyes")
        .then(function (getResponse) {
            return getResponse.json();
        })
        .then(movies => {
            let found = false;
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].id === movieId) {
                    movieContainer.innerHTML = `
            <div>
            <img alt="movie cover" src="${movies[i].image}"/>
            <h2>${movies[i].title}</h2>
            <span>${movies[i].released}</span>
            </div>`
                    found = true;
                    break;
                }
            }
            if (!found) {
                window.location.href = "index.html";
            }
        })
}

fetchSingleMovie();