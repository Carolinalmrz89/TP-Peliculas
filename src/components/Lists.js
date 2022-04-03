import { useState, useEffect } from "react";
import { urlBase, apiKey } from "../auxiliaries/Auxiliaries";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListMovieItem from "./ListMovieItem";

const Lists = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${urlBase}${url}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Box
      sx={{
        width: {
          xs: "80%",
          sm: "75%",
          md: "45%",
          lg: "42%",
        },
        textAlign: "center",
        border: "1px solid #282828",
        mb: 4,
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ bgcolor: "#282828", color: "white", p: 1 }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          height: "400px",
          overflowY: "scroll",
        }}
      >
        {movies.map((movie) => (
          <ListMovieItem
            image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            title={movie.title}
            link={`/movie-detail/${movie.id}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Lists;
