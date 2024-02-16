// hero slides

const buttons = document.querySelectorAll("[data-carousel-button]")


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

// filter function

async function fetchMovieGenres() {
    try {
        const response = await fetch("https://api.noroff.dev/api/v1/square-eyes");
        const moviesData = await response.json();
        const movieGenres = moviesData.map(movie => movie.genre);

        const removeMultipleGenres = [...new Set(movieGenres)];

        removeMultipleGenres.forEach(genre => {
            const filterDropdown = document.getElementById("filter-select");
            filterDropdown.value = genre.toLowerCase();
            filterDropdown.textContent = genre;
            filterSelect.appendChild(option);
        });

        filterSelect.addEventListener('change', () => {
            const selectGenre = filterSelect.value.toLowerCase();
            const filteredMovies = movieGenres.filter(movie => movie.genre.toLowerCase() === selectGenre || selectGenre === 'default');

            renderMovies(filteredMovies);
        });
    } catch (error) {
        console.error('Error fetching movie genres:', error);
    }
}

function renderMovies(movies) {
    moviesList.innerHTML = ''; // clear previous movie list

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        // Movie cover (image)
        const image = document.createElement('img');
        image.src = movie.cover;
        image.alt = movie.title;
        movieElement.appendChild(image);

        // Movie title
        const titleElement = document.createElement('p');
        titleElement.textContent = movie.title;
        movieElement.appendChild(titleElement);

        // Release year
        const releaseYearElement = document.createElement('p');
        releaseYearElement.textContent = `Release Year: ${movie.releaseYear}`;
        movieElement.appendChild(releaseYearElement);

        moviesList.appendChild(movieElement);
    })
}

fetchMovieGenres();

//movie cards

let movieContainer = document.querySelector(".movie-container");

let squareEyes = fetch("https://api.noroff.dev/api/v1/square-eyes")
    .then(function (getResponse) {
        return getResponse.json();
    })
    .then(result => {
        let movies = result;
        for (var i = 0; i < movies.length; i++) {
            movieContainer.innerHTML += `
            <div>
            <img alt="movie cover" src="${movies[i].image}"/>
            <h2>${movies[i].title}</h2>
            <span>${movies[i].released}</span>
            </div>`
        }
    });