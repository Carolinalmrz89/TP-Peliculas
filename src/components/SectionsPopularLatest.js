import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const SectionsPopularLatest = ({ title, url }) => {
  let urlBase = "https://api.themoviedb.org/3/movie/";
  let apiKey = "0a68557b9bafe8081e017b64d2ebdb4e";

  const [movies, setMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    fetch(`${urlBase}${url}?api_key=${apiKey}&page=1`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ p: 1 }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {movies.map((movie) => (
          <MovieCard
            image={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            title={movie.title}
            url={movie.id}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SectionsPopularLatest;
