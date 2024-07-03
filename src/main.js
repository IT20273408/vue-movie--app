document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const movieGrid = document.getElementById('movie-grid');

    
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;


    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        if (query) {
            fetchMovies(query);
        }
    });

    const fetchMovies = async (query) => {
        const response = await fetch(`${apiUrl}${query}`);
        const data = await response.json();
        displayMovies(data.results);
    };


    const displayMovies = (movies) => {
        movieGrid.innerHTML = ''; 
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('item');
            movieItem.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>${movie.overview}</p>
                <button class="remove-btn">Remove</button>
            `;
            movieGrid.appendChild(movieItem);

         
            movieItem.querySelector('.remove-btn').addEventListener('click', () => {
                movieItem.remove();
            });
        });
    };
});
