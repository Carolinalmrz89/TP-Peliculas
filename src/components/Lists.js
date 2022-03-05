import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import ListMovieItem from "./ListMovieItem";

const Lists = ({ title, url }) => {
  const urlBase = "https://api.themoviedb.org/3/movie/";
  const apiKey = "0a68557b9bafe8081e017b64d2ebdb4e";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${urlBase}${url}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

      {movies.map((movie) => (
        <ListMovieItem
          image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          title={movie.title}
          link={movie.id}
        />
      ))}
    </Box>
  );
};

export default Lists;
