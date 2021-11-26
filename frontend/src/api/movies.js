
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

export async function UpdateMovie(id, accessToken, movie) {
    const response = await fetch(`http://localhost:${port}/movies/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(movie)
    });
    return response;
}

export async function createMovie(accessToken, movie) {
    const response = await fetch(`http://localhost:${port}/movies`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(movie)
    });
    return response;
}

