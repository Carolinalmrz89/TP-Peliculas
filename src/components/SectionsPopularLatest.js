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
        alignItems: "center",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ p: 3, fontWeight: "bold" }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {movies.map((movie) => (
          <MovieCard
            image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            title={movie.title}
            link={`/movie-detail/${movie.id}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SectionsPopularLatest;
