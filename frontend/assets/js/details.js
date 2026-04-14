function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

async function loadMovieDetails() {
  const title = getQueryParam("title");
  console.log("title from URL:", title);

  if (!title) {
    document.getElementById("movieTitle").textContent = "No movie selected";
    document.getElementById("movieSynopsis").textContent = "Please go back and choose a movie from the gallery.";
    document.getElementById("movieScore").textContent = "";
    document.getElementById("movieReleaseDate").textContent = "";
    return;
  }

  try {
    const url = `http://127.0.0.1:3001/api/search?q=${encodeURIComponent(title)}`;
    console.log("fetching:", url);

    const response = await fetch(url);

    console.log("response received:", response);
    console.log("response status:", response.status);

    const movies = await response.json();
    console.log("movies:", movies);

    if (!Array.isArray(movies) || movies.length === 0) {
      document.getElementById("movieTitle").textContent = "Movie not found";
      document.getElementById("movieSynopsis").textContent = "No details were returned for this movie.";
      document.getElementById("movieScore").textContent = "";
      document.getElementById("movieReleaseDate").textContent = "";
      return;
    }

    const movie = typeof formatMovieDetails === "function"
      ? formatMovieDetails(movies[0])
      : movies[0];

    console.log("formatted movie:", movie);
    console.log("poster element exists:", !!document.getElementById("moviePoster"));

    document.getElementById("movieTitle").textContent = movie.title;
    document.getElementById("movieSynopsis").textContent = movie.synopsis;
    document.getElementById("movieScore").textContent = `TMDB Score: ${movie.rating}`;
    document.getElementById("moviePoster").src = movie.poster;
    document.getElementById("moviePoster").alt = movie.title;
    document.getElementById("movieReleaseDate").textContent = `Release Date: ${movie.releaseDate}`;
  } catch (error) {
    console.error("details.js error:", error);
    document.getElementById("movieTitle").textContent = "Error loading movie";
    document.getElementById("movieSynopsis").textContent = "There was a problem fetching movie details.";
    document.getElementById("movieScore").textContent = "";
    document.getElementById("movieReleaseDate").textContent = "";
  }
}

document.addEventListener("DOMContentLoaded", loadMovieDetails);