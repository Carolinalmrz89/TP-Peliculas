import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import ListMovieItem from "./ListMovieItem";
import { urlBase, apiKey } from "../auxiliaries/Auxiliaries";

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
        textAlign: "center",
        border: "1px solid #282828",
        height: "450px",
        overflowY: "scroll",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ bgcolor: "#282828", color: "white", p: 1 }}
      >
        {title}
      </Typography>

      {movies.map((movie) => (
        <ListMovieItem
          image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          title={movie.title}
          link={`/movie-detail/${movie.id}`}
        />
      ))}
    </Box>
  );
};

export default Lists;
