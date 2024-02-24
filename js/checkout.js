const cartData = JSON.parse(window.localStorage.getItem("cart")) || [];
const movieDivCheckout = document.getElementById("checkout-products-div");

async function displayCheckoutSum() {
    let totalPrice = 0;
    let summaryHtml = "";

   for (const movie of cartData) {
        const response = await fetch(`https://api.noroff.dev/api/v1/square-eyes/${movie.id}`);
        const data = await response.json();

        summaryHtml += `
        <div class="movie-item">
            <img id="movie-cover-checkout" src="${data.image}" alt="${data.title}"/>
            <div class="movie-details-checkout">
                <h3 class="movie-title-checkout">${data.title}</h3>
                <div><span class="text-w-400">Audio: </span><span>English</span></div>
                <div><span class="text-w-400">Subtitles: </span><span>English (CC), French, German, Norwegian, Swedish</span></div>
                <div><span class="text-w-400">Price: </span><span> ${data.price} NOK</span></div>
            </div>
        </div>
      <div class="line-divider-checkout"></div>
        `;
        totalPrice += data.price;
    }

    summaryHtml += `<div class="total-price-checkout"><span>Total:</span><span id="sum">$${totalPrice.toFixed(2)}</span></div>`;
    movieDivCheckout.innerHTML = summaryHtml;
}

displayCheckoutSum();