/**
 * Notes:
 * Handlers/Controllers - handldes request logic
 * 
 * - Reads the req and validates its inputs
 */

const {
    searchMovieByName,
    getSimilarMovies
} = require('../services/movieService');

// GET /api/movies/search
const searchMoviesHandler = async (req, res) => {
    try {
        const { query } = req.query;

        if (!query) {
        return res.status(400).json({ error: 'Movie query is required' });
        }

        const movies = await searchMovieByName(query);
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
};

// GET /api/movies/:id/similar
const getSimilarMoviesHandler = async (req, res) => {
    try {
        const { id } = req.params;

        const movies = await getSimilarMovies(id);
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch similar movies' });
    }
};

module.exports = {
    searchMoviesHandler,
    getSimilarMoviesHandler
};
