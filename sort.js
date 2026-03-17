function sortByRating(movies) {
    return movies.sort((a, b) => b.rating - a.rating);
}

module.exports = sortByRating;