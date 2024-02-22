const cartDropdownContent = document.getElementById('cart-dropdown');
const closeCartBtn = document.getElementById('cart-close-btn');

// dropdown cart
function cartDropdown() {
    cartDropdownContent.style.display = "block";
}

// close dropdown cart
closeCartBtn.addEventListener("click", closeCartDropdown);

function closeCartDropdown() {
    document.getElementById("cart-dropdown").style.display = "none";
}

// Add movie to cart
function addToCart(movieId, movieTitle) {
    // retrieve existing watchlist or create a new one
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the movie is already in the cart
    if (!cart.some(movie => movie.id === movieId)) {
        // Add the movie to the cart
        cart.push({id: movieId, title: movieTitle});

        // Store the updated cart items back in localstorage
        localStorage.setItem('cart', JSON.stringify(cart));

        displayInCart(); // update items in cart immediately

    } else {
        alert('This movie is already added to cart.')
    }
}

async function displayInCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productsDiv = document.getElementById('products-div');
    const sumTotalElement = document.getElementById('sumTotal');
    const emptyCartText = document.getElementById('empty-cart-text');
    let totalAmount = 0;

    // Clear the productsDiv before adding new HTML
    productsDiv.innerHTML = '';

    // Array to hold promises for each API call
    let fetchPromises = [];

    // Create promises for each movie in the cart
    for (const movie of cart) {
        try {
            const response = await fetch(`https://api.noroff.dev/api/v1/square-eyes/${movie.id}`);
            const data = await response.json();

            // add the movie price to the total amount
            totalAmount += parseFloat(data.price);

            // build the HTML string for each movie
            const movieHTML = `
                <div id="movie-div-cart">
                    <div id="movie-info">
                        <img class="movie-cover-cart" src="${data.image}" alt="${data.title}">
                        
                        <div class="movie-data">
                            <div class="title-and-price-movie-cart">
                                <span class="movie-title">${data.title}</span>
                                <span class="movie-price">${data.price} NOK</span>
                            </div>
                        
                        <button class="trash-remove-btn-cart" data-index="${cart.indexOf(movie)}">
                            <i class="fa-solid fa-trash fa-xl"></i>
                        </button>
                        </div>
                    </div>
                    <div class="line-divider-cart"></div>
                </div>`;

            productsDiv.innerHTML += movieHTML;
        } catch (error) {
            console.error('Failed to add movie to cart:', error);
        }
    }

    // update total amount in the sumTotalElement
    sumTotalElement.textContent = totalAmount.toFixed(2) + ' NOK';

    // update empty cart text
    emptyCartText.style.display = cart.length === 0 ? 'block' : 'none';
}

// Call displayInCart when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    displayInCart();

});
cartDropdownContent.addEventListener('click', (event) => {
    if (event.target.classList.contains("trash-remove-btn-cart")) {
        let index = event.target.dataset.index;
        removeFromCart(index);
    }
})
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cart', JSON.stringify(cart));
    displayInCart();
}



