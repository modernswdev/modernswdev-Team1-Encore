function searchMedia(query, mediaList) {
  if (!query) return [];

  return mediaList.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
}

module.exports = searchMedia;