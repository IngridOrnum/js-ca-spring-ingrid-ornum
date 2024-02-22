const buttons = document.querySelectorAll("[data-carousel-button]");
const filterSelect = document.querySelector('#filter-select');
let movieContainer = document.querySelector(".movie-container");
const loader = document.querySelector('.loader');


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

// fetch movies
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

async function filterMovies(filterParameter) {
    try {
        const getResponse = await fetch("https://api.noroff.dev/api/v1/square-eyes");
        const result = await getResponse.json();
        let movies = result;
        movieContainer.innerHTML = "";
        console.log(filterParameter);
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



// function fetchAllMovies() {
//     loader.style.display = "block";
//     fetch("https://api.noroff.dev/api/v1/square-eyes")
//         .then(function (getResponse) {
//             return getResponse.json();
//         })
//         .then(result => {
//             let movies = result;
//             let genreArray = [];
//             movieContainer.innerHTML = "";
//             filterSelect.innerHTML = " <option selected>View all movies</option>";
//             for (let i = 0; i < movies.length; i++) {
//                 movieContainer.innerHTML += `
//             <a href="movie-page.html?id=${movies[i].id}">
//             <img alt="movie cover" src="${movies[i].image}"/>
//             <h2>${movies[i].title}</h2>
//             <span>${movies[i].released}</span>
//             </a>`
//
//                 if (!genreArray.includes(movies[i].genre)) (
//                     genreArray.push(movies[i].genre)
//                 );
//             }
//             for (let i = 0; i < genreArray.length; i++) {
//                 filterSelect.innerHTML += `
//                 <option>${genreArray[i]}</option>`
//             }
//             loader.style.display = "none";
//         })
// }
//
// fetchAllMovies();
//
// function filterMovies(filterParameter) {
//     fetch("https://api.noroff.dev/api/v1/square-eyes")
//         .then(function (getResponse) {
//             return getResponse.json();
//         })
//         .then(result => {
//             let movies = result;
//             movieContainer.innerHTML = ``;
//             console.log(filterParameter)
//             for (let i = 0; i < movies.length; i++) {
//                 if (movies[i].genre === filterParameter) {
//                     movieContainer.innerHTML += `
//             <a href="movie-page.html?id=${movies[i].id}">
//             <img alt="movie cover" src="${movies[i].image}"/>
//             <h2>${movies[i].title}</h2>
//             <span>${movies[i].released}</span>
//             </a>`
//                 }
//             }
//         })
// }

filterSelect.addEventListener('change', function() {
    if (filterSelect.value === "View all movies") {
        fetchAllMovies();
    } else {
        filterMovies(filterSelect.value);
    }
})


