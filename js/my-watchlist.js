async function displayWatchlist() {
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    let movieElement = document.getElementById('movieElement');

    // Clear previous content
    movieElement.innerHTML = '';

    // Display each movie in the watchlist
    for (const movie of watchlist) {
        // Create a div element to contain the movie information
        let movieDiv = document.createElement('div');

        try {
            // fetch movie details
            const response = await fetch(`https://api.noroff.dev/api/v1/square-eyes/${movie.id}`);
            const data = await response.json();

            // create image element
            let imgElement = document.createElement('img');
            imgElement.src = data.image;
            imgElement.alt = data.title;
            imgElement.classList.add(".movieCover");

            // create p element for the movie title
            let titleElement = document.createElement('p');
            titleElement.textContent = data.title;

            let removeButton = document.createElement('button');
            removeButton.textContent = "Remove from watchlist";

            // append the image and title elements to the movie div
            movieDiv.appendChild(imgElement);
            movieDiv.appendChild(titleElement);
            movieDiv.appendChild(removeButton);
        } catch (error) {
            console.error('Error fetching movie details:', error);
        }


        // append the movie div to the movie element
        movieElement.appendChild(movieDiv);
    }
}

// Call displayWatchlist when the page loads
window.onload = displayWatchlist;
