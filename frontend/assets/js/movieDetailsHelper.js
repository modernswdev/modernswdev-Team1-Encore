function formatMovieDetails(movie) {
  return {
    title: movie.title || "Untitled Movie",
    synopsis: movie.overview || "No synopsis available.",
    rating:
      movie.rating !== undefined && movie.rating !== null
        ? movie.rating
        : "Not rated yet",
    poster: movie.poster || "images/thumbs/placeholder.png",
    releaseDate: movie.release_date || "Unknown release date"
  };
}

module.exports = formatMovieDetails;