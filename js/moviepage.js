const parameterString = window.location.search;
const searchParameter = new URLSearchParams(parameterString);
const movieId = searchParameter.get('id');
const movieContainer = document.getElementById('movie-container');

for (const parameter of searchParameter) {
    console.log(parameter)
}

// Add movie to watchlist
function addToWatchlist (movieId, movieTitle) {
    // retrieve existing watchlist or create a new one
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

    // Check if the movie is already in the watchlist
    if(!watchlist.some(movie => movie.id === movieId)) {
        // Add the movie to the watchlist
        watchlist.push({id: movieId, title: movieTitle});

        // Store the updated watchlist back in localstorage
        localStorage.setItem('watchlist', JSON.stringify(watchlist));

        // Redirect to my my-watchlist.html
        alert('Movie added to your watchlist.')
    } else {
        alert('This movie is already added to your watchlist.')
    }
}



// Display movie that was clicked
function fetchSingleMovie() {
    fetch("https://api.noroff.dev/api/v1/square-eyes")
        .then(function (getResponse) {
            return getResponse.json();
        })
        .then(movies => {
            let found = false;
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].id === movieId && movies[i].onSale === true) {
                    movieContainer.innerHTML = `
                        <section class="movie-section">
            <h2 id="movie-heading">${movies[i].title}</h2>
            <div class="movie-details">
            <span>${movies[i].genre}</span>
            <div class="line-divider"></div>
            <span>${movies[i].released}</span>
            <div class="line-divider"></div>
            <span class="imdb-rating">
            <i class="fa-brands fa-imdb fa-lg"></i>
            <span>${movies[i].rating}</span>
            </span>
            </div>
            <div class="movie-cover-and-buttons-desktop">
        <img alt="movie cover" id="img-cover-mobile" src="${movies[i].image}"/>
        <img alt="movie cover" id="img-cover-desktop" src="${movies[i].image}"/>
        <div class="buttons-action-moviepage-desktop">
        <span>Before: ${movies[i].price} NOK</span>
            <form action="checkout.html">
                <button id="button-buy">Buy ${movies[i].discountedPrice} kr</button>
            </form>
            <button id="button-watchlist" onclick="addToWatchlist('${movies[i].id}', '${movies[i].title}')">
                <svg fill="none" height="32" viewBox="0 0 31 32" width="31"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1796 6.63403V25.2094M6.32483 15.9217H24.0343" stroke="#101828"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                Watchlist
            </button>
        </div>
    </div>
            <div>${movies[i].description}</div>
            </section>
            
            `
                    found = true;
                    break;
                }
                if (movies[i].id === movieId && movies[i].onSale === false) {
                    movieContainer.innerHTML = `
            <section class="movie-section">
            <h2 id="movie-heading">${movies[i].title}</h2>
            <div class="movie-details">
            <span>${movies[i].genre}</span>
            <div class="line-divider"></div>
            <span>${movies[i].released}</span>
            <div class="line-divider"></div>
            <span class="imdb-rating">
            <i class="fa-brands fa-imdb fa-lg"></i>
            <span>${movies[i].rating}</span>
            </span>
            </div>
            <div class="movie-cover-and-buttons-desktop">
        <img alt="movie cover" id="img-cover-mobile" src="${movies[i].image}"/>
        <img alt="movie cover" id="img-cover-desktop" src="${movies[i].image}"/>
        <div class="buttons-action-moviepage-desktop">
            <form action="checkout.html">
                <button id="button-buy">Buy ${movies[i].price} NOK</button>
            </form>
            <button id="button-watchlist" onclick="addToWatchlist('${movies[i].id}', '${movies[i].title}')">
                <svg fill="none" height="32" viewBox="0 0 31 32" width="31"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1796 6.63403V25.2094M6.32483 15.9217H24.0343" stroke="#101828"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                Watchlist
            </button>
        </div>
    </div>
            <div>${movies[i].description}</div>
            </section>`
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