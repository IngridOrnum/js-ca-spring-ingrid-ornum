const cartDropdownContent = document.getElementById('cart-dropdown');
const closeCartBtn = document.getElementById('cart-close-btn');
const sumCart = document.getElementById('sum-js');


// dropdown
function cartDropdown(){
    cartDropdownContent.style.display = "block";
}

// close dropdown

closeCartBtn.addEventListener("click", closeCartDropdown);

function closeCartDropdown() {
    document.getElementById("cart-dropdown").style.display = "none";
}


// Add movie to cart
function addToCart (movieId, movieTitle) {
    // retrieve existing watchlist or create a new one
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the movie is already in the watchlist
    if(!cart.some(movie => movie.id === movieId)) {
        // Add the movie to the watchlist
        cart.push({id: movieId, title: movieTitle});

        // Store the updated watchlist back in localstorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redirect to my my-watchlist.html
        alert('Movie added to your cart.')
    } else {
        alert('This movie is already added to cart.')
    }
}

async function displayInCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productsDiv = document.getElementById('products-div');

    // Clear previous content
    productsDiv.innerHTML = '';

    // Display each movie in the cart
    for (const movie of cart) {
        // Create a div element to contain the movie information
        let movieDiv = document.createElement('div');
        movieDiv.classList.add(".movie-div-cart")

        try {
            // fetch movie details
            const response = await fetch(`https://api.noroff.dev/api/v1/square-eyes/${movie.id}`);
            const data = await response.json();

            // create image element
            let imgElement = document.createElement('img');
            imgElement.src = data.image;
            imgElement.alt = data.title;
            imgElement.classList.add(".movie-cover-cart");

            // create p element for the movie title
            let titleElement = document.createElement('p');
            titleElement.textContent = data.title;

            //create a remove button
            let removeButton = document.createElement('button');
            removeButton.innerHTML = "<i class=\"fa-solid fa-trash fa-lg\"></i>";
            removeButton.classList.add(".trash-remove-btn-cart");

            removeButton.addEventListener('click', function () {
                // remove the movie from the cart
                cart = cart.filter(item => item.id !== movie.id);

                // update localstorage with the modified cart
                localStorage.setItem('cart', JSON.stringify(cart));

                // remove the movie div from the DOM
                movieDiv.remove();
            });

            // append the image and title elements to the movie div
            movieDiv.appendChild(imgElement);
            movieDiv.appendChild(titleElement);
            movieDiv.appendChild(removeButton);

            // append the movie div to the movie element
            productsDiv.appendChild(movieDiv);

        } catch (error) {
            console.error('Failed to add movie to cart:', error);
        }
    }
}

// Call displayWatchlist when the page loads
window.onload = displayInCart();
