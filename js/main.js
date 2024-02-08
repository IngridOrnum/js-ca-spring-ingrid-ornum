const carouselBtn = document.querySelector("[data-carousel]-button");

carouselBtn.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
    })
})


// document.addEventListener("DOMContentLoaded", function () {
//     let carousel = document.querySelector(".carousel");
//     let carouselItem = carousel.querySelectorAll(".carousel-item");
//     let dotsContainer = document.querySelector(".dots");
//
//     // Insert dots into the DOM
//     carouselItem.forEach((_, index) => {
//         let dot = document.createElement("span");
//         dot.classList.add("dot");
//         if (index === 0) dot.classList.add("active");
//         dot.dataset.index = index;
//         dotsContainer.appendChild(dot);
//     });
//
//     let dots = document.querySelectorAll(".dot");
//
//     // Function to show a specific item
//     function showCarouselItem(index) {
//         carouselItem.forEach((item, idx) => {
//             carouselItem.classList.remove("active");
//             dots[idx].classList.remove("active");
//             if (idx === index) {
//                 carouselItem.classList.add("active");
//                 dots[idx].classList.add("active");
//             }
//         });
//     }
//
//     // Event listeners for buttons
//     document.querySelector(".btn-prev").addEventListener("click", () => {
//         let index = [...carouselItem].findIndex((carouselItem) =>
//             carouselItem.classList.contains("active")
//         );
//         showItem((index - 1 + carouselItem.length) % carouselItem.length);
//     });
//
//     document.querySelector(".btn-next").addEventListener("click", () => {
//         let index = [...carouselItem].findIndex((item) =>
//             item.classList.contains("active")
//         );
//         showCarouselItem((index + 1) % carouselItem.length);
//     });
//
//     // Event listeners for dots
//     dots.forEach((dot) => {
//         dot.addEventListener("click", () => {
//             let index = parseInt(dot.dataset.index);
//             showItem(index);
//         });
//     });
// });
