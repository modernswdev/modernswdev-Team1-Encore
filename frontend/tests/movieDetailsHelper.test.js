const formatMovieDetails = require("../assets/js/movieDetailsHelper");

describe("formatMovieDetails", () => {
  test("returns existing movie fields correctly", () => {
      const movie = {
      title: "Inception",
      overview: "A dream heist movie",
      rating: 8.8,
      poster: "poster.jpg",
      release_date: "2010-07-16"
      };

      const result = formatMovieDetails(movie);

      expect(result).toEqual({
      title: "Inception",
      synopsis: "A dream heist movie",
      rating: 8.8,
      poster: "poster.jpg",
      releaseDate: "2010-07-16"
      });
      });

      test("fills in default values when fields are missing", () => {
      const movie = {};

      const result = formatMovieDetails(movie);

      expect(result).toEqual({
            title: "Untitled Movie",
            synopsis: "No synopsis available.",
            rating: "Not rated yet",
            poster: "images/thumbs/placeholder.png",
            releaseDate: "Unknown release date"
            });
      });
      });