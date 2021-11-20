
const port = process.env.PORT || 8080;

export async function getAllMovies() {
    const response = await fetch(`http://localhost:${port}/movies`);
    const movies = await response.json();
    return movies;
}

