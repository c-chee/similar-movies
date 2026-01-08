/**
 * Notes:
 * This file will start my server.
 * .env - will hoold my keys
 */

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes.js');


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
