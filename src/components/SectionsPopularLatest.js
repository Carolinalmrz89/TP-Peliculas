import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { urlBase, apiKey } from "../auxiliaries/Auxiliaries";

const SectionsPopularLatest = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${urlBase}${url}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
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
