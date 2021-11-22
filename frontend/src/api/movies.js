
const port = process.env.PORT || 8080;

export async function getAllMovies() {
    const response = await fetch(`http://localhost:${port}/movies`);
    const movies = await response.json();
    return movies;
}

export async function getMovieById(id) {
    const response = await fetch(`http://localhost:${port}/movies/${id}`);
    const movie = await response.json();
    return movie;
}

export async function deleteMovieByid(id, accessToken) {
    const response = await fetch(`http://localhost:${port}/movies/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    return response.status;
}

