/**
 * Notes:
 * Routes - Defines my API endpoints (URLs)
 * 
 * - Matches the search and then calles the handler
 */

// === Dependecies ===
const express = require('express');
const {
    searchMoviesHandler,
    getSimilarMoviesHandler
} = require('../handlers/movieHandler.js');

const router = express.Router();

router.get('/search', searchMoviesHandler);
router.get('/:id/similar', getSimilarMoviesHandler);

module.exports = router;



module.exports = router;