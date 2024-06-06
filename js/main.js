const buttons = document.querySelectorAll("[data-carousel-button]");
const filterSelect = document.querySelector('#filter-select');
let movieContainer = document.querySelector(".movie-container");
const loader = document.querySelector('.loader');
const movieSliderId = [
    "6c8fbbac-b0b7-42d9-a01b-cce95c99bdee",
    "04fd79ad-2612-4dab-b2ee-1320c4e5ccd1",
    "d5c5c3e0-07da-406a-b3db-8336c40c5ae7"
]

// Movie slides
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

// Display each movie in slider hero

async function fetchMovieDetails(movieId) {
    try {
        const response = await fetch(`https://api.noroff.dev/api/v1/square-eyes/${movieId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
}

async function displayMovieInSlider() {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < movieSliderId.length; i++) {
        const movieId = movieSliderId[i];
        const movieDetails = await fetchMovieDetails(movieId);
        if (movieDetails) {
            const slide = slides[i];
            const titleElement = slide.querySelector('.movie-title-hero');
            const descriptionElement = slide.querySelector('.p-text');

            titleElement.textContent = movieDetails.title;
            descriptionElement.textContent = movieDetails.description;
        }
    }
}

displayMovieInSlider();

// CATEGORIES SECTION / FILTER FUNCTION

// Fetch all movies
async function fetchAllMovies() {
    loader.style.display = "block";
    try {
        const getResponse = await fetch("https://api.noroff.dev/api/v1/square-eyes");
        const result = await getResponse.json();
        let movies = result;
        let genreArray = [];
        movieContainer.innerHTML = "";
        filterSelect.innerHTML = "<option selected>View all movies</option>";
        for (let i = 0; i < movies.length; i++) {
            movieContainer.innerHTML += `
            <a href="movie-page.html?id=${movies[i].id}">
                <img alt="movie cover" src="${movies[i].image}"/>
                <h2>${movies[i].title}</h2>
                <span>${movies[i].released}</span>
            </a>`;
            if (!genreArray.includes(movies[i].genre)) {
                genreArray.push(movies[i].genre);
            }
        }
        for (let i = 0; i < genreArray.length; i++) {
            filterSelect.innerHTML += `<option>${genreArray[i]}</option>`;
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
    } finally {
        loader.style.display = "none";
    }
}

fetchAllMovies();

// Filter
async function filterMovies(filterParameter) {
    try {
        const getResponse = await fetch("https://api.noroff.dev/api/v1/square-eyes");
        const result = await getResponse.json();
        let movies = result;
        movieContainer.innerHTML = "";
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].genre === filterParameter) {
                movieContainer.innerHTML += `
                <a href="movie-page.html?id=${movies[i].id}">
                    <img alt="movie cover" src="${movies[i].image}"/>
                    <h2 class="movie-title-homepage">${movies[i].title}</h2>
                    <span class="movie-release-homepage">${movies[i].released}</span>
                </a>`;
            }
        }
    } catch (error) {
        console.error("Error filtering movies:", error);
    }
}

filterSelect.addEventListener('change', function() {
    if (filterSelect.value === "View all movies") {
        fetchAllMovies();
    } else {
        filterMovies(filterSelect.value);
    }
})


