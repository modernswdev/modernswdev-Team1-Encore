require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const { connect } = require("mongoose");
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Encore API is running");
});

app.get("/api/search", async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: "Missing search query" });
  }

  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`;

    const response = await fetch(url);
    const data = await response.json();

  const formattedResults = (data.results || []).map((movie) => ({
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      overview: movie.overview,
      rating: movie.vote_average,
      poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null
    }));

    res.json(formattedResults);

  } catch (error) {
    console.error("TMDB search error:", error.message);
    res.status(500).json({ error: "Failed to fetch media from TMDB" });
  }
});

const PORT = process.env.PORT || 3001;

connectDB()
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});