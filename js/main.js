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
            <img alt="movie cover" src="${movies[i].image}"/>
            <h2>${movies[i].title}</h2>
            <span>${movies[i].released}</span>
            </div>`
        }
    });