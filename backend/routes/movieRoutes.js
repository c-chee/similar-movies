/**
 * Notes:
 * Routes - Defines my API endpoints (URLs)
 */

const express = require("express");
const { searchMovieByName, getSimilarMovies} = require("../services/movieService.js");

const router = express.Router();

router.get('/search', async (req, res) => {
    try {
        const { query } = req.query;

        if (!query) {
        return res.status(400).json({ error: 'Movie query is required'});
        }

        const movies = await searchMovieByName(query);
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movies'});
    }
});

// GET /api/movies/:id/similar
router.get('/:id/similar', async (req, res) => {
    try {
        const { id } = req.params;

        const movies = await getSimilarMovies(id);
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch similar movies'});
    }
});


module.exports = router;