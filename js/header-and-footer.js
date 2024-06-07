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
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (!cart.some(movie => movie.id === movieId)) {
        cart.push({id: movieId, title: movieTitle});

        localStorage.setItem('cart', JSON.stringify(cart));

        displayInCart();

        alert('Movie successfully added to cart.')

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

    productsDiv.innerHTML = '';

    let fetchPromises = [];

    for (const movie of cart) {
        try {
            const response = await fetch(`https://api.noroff.dev/api/v1/square-eyes/${movie.id}`);
            const data = await response.json();

            totalAmount += parseFloat(data.price);

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

    sumTotalElement.textContent = totalAmount.toFixed(2) + ' NOK';

    emptyCartText.style.display = cart.length === 0 ? 'block' : 'none';
}

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



