async function displayWatchlist() {
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    let movieElement = document.getElementById('movieElement');

    movieElement.innerHTML = '';

    for (const movie of watchlist) {
        let movieDiv = document.createElement('div');
        movieDiv.classList.add("movie-div-watchlist");

        try {
            const response = await fetch(`https://api.noroff.dev/api/v1/square-eyes/${movie.id}`);
            const data = await response.json();

            let imgElement = document.createElement('img');
            imgElement.src = data.image;
            imgElement.alt = data.title;
            imgElement.classList.add("movie-cover");

            let titleElement = document.createElement('h3');
            titleElement.textContent = data.title;
            titleElement.classList.add("movie-title-watchlist");


            let removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.classList.add("watchlist-remove-btn");

            removeButton.addEventListener('click', () => {

                const index = watchlist.findIndex(item => item.id === movie.id);
                if (index !== -1) {
                    watchlist.splice(index, 1);

                    localStorage.setItem('watchlist', JSON.stringify(watchlist));

                    movieDiv.remove();
                }
            });

            movieDiv.appendChild(imgElement);
            movieDiv.appendChild(titleElement);
            movieDiv.appendChild(removeButton);
        } catch (error) {
            console.error('Error fetching movie details:', error);
        }
        movieElement.appendChild(movieDiv);
    }
}

window.onload = displayWatchlist;
