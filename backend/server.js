/**
 * Notes:
 * This file will start my server.
 * .env - will hoold my keys
 * 
 * - It recieves req and passes it to the API
 */

const dotenv = require('dotenv'); // Loads envirnment variable and inmports the dotenv package
dotenv.config(); // Tells dotenv to read and load the .env fiile

// === Imported Libraries ===
const express = require('express'); // Handles routes, req, and resp.
const cors = require('cors'); // Allows APIs to be access by other domains
const path = require('path'); // Needed to serve static frontend files
const movieRoutes = require('./routes/movieRoutes.js'); // Imported custom route 

// === Create EXPRESS Server
const app = express(); 

// === Middleware ===
app.use(cors()); // Enables CORS to handle incoming req. - for front and backend to communicate
app.use(express.json()); // Allows the server to read JSON data

// === ROUTES ===
app.use('/api/movies', movieRoutes); // Any routes containing '/api/movies', refer to movieRoutes.js

// === Serve frontend static files ===
app.use(express.static(path.join(__dirname, '../frontend/build')));

// === Wildcard route for React Router ===
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 5000; // Use PORT defined in .env or fallback to PORT 5000

app.listen(PORT, () => { // Starts server
    console.log(`Server running on port ${PORT}`); // Console the servers PORT
});
