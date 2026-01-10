import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query) return;

        setLoading(true);
        setError("");

        try {
        const res = await fetch(
            `http://localhost:5000/api/movies/search?query=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        setMovies(data);
        } catch (err) {
        setError("Failed to fetch movies.");
        console.error(err);
        } finally {
        setLoading(false);
        }
    };

    return (
        <div>
        <h1>Search Movies</h1>
        <form onSubmit={handleSearch}>
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a movie name"
            />
            <button type="submit">Search</button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <div className="movie-grid">
            {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
                <Link to={`/movie/${movie.id}`}>
                    {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                    />
                    ) : (
                    <div className="no-poster">No Image</div>
                    )}
                    <p className="movie-title">{movie.title}</p>
                    {movie.release_date && <p className="movie-info">Release: {movie.release_date}</p>}
                    {movie.vote_average !== undefined && <p className="movie-info">Rating: {movie.vote_average}</p>}
                </Link>
                </div>
            ))}
        </div>
        </div>
    );
}
