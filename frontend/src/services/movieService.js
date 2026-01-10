const API_BASE = "http://localhost:5000/api/movies";

export async function searchMovies(query) {
    const res = await fetch(`${API_BASE}/search?query=${encodeURIComponent(query)}`);
    if (!res.ok) throw new Error("Failed to fetch movies");
    return res.json(); // returns array from backend
}

export async function getSimilarMovies(movieId) {
    const res = await fetch(`${API_BASE}/${movieId}/similar`);
    if (!res.ok) throw new Error("Failed to fetch similar movies");
    return res.json(); // returns array from backend
}
