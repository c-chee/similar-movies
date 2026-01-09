/**
 * Notes:
 * Services - Talks to external APIs (In this projects case, TMBD)
 * 
 * - Fetchs the data to be returned
 */

// === Envirnment Variables ===
const BASE_URL = process.env.TMDB_BASE_URL;
const API_KEY = process.env.TMDB_API_KEY;

// === Search Movie ===
async function searchMovieByName(query) {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
        throw new Error('TMDB request failed');
    }

    const data = await response.json();
    return data.results;
}

// === Search Similar Movies ===
async function getSimilarMovies(movieId) {
    const response = await fetch(
        `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`
    );

    if (!response.ok) {
        throw new Error('TMDB request failed');
    }

    const data = await response.json();
    return data.results;
}

// === Exports ===
module.exports = {
    searchMovieByName,
    getSimilarMovies
};
