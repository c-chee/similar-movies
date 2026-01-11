import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function MovieDetails() {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchSimilar = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/movies/${id}/similar`);
            const data = await res.json();
            setMovies(data);
        } catch (err) {
            setError("Failed to fetch similar movies.");
            console.error(err);
        } finally {
            setLoading(false);
        }
        };

        fetchSimilar();
    }, [id]);

    return (
        <div class = 'similar-movies-results-container'>
            <h2>Similar Movies</h2>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <section className = 'movie-grid'>
                {movies.map((movie) => (
                <div key = {movie.id} className = 'movie-card'>
                    <Link to = {`/movie/${movie.id}`}>
                        {movie.poster_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt = {movie.title}
                        />
                        ) : (
                        <div className = 'no-poster'>No Image</div>
                        )}
                        <p className = 'movie-title'>{movie.title}</p>
                        {movie.release_date && <p className = 'movie-info'>Release: {movie.release_date}</p>}
                        {movie.vote_average !== undefined && <p className = 'movie-info'>Rating: {movie.vote_average}</p>}
                    </Link>
                    </div>

                ))}
            </section>

            <Link class = 'back-to-seach-btn' to = '/'>Back to Search</Link>
        </div>
    );
}
