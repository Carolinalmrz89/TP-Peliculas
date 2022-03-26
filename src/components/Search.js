import { useSearchParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { apiKey } from "../auxiliaries/Auxiliaries";
import MovieCard from "./MovieCard";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });

  const [movies, setMovies] = useState([]);

  const [valorDelInput, setValorDelInput] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchParams.get(
        "query"
      )}&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [searchParams]);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSearchParams({
      query: valorDelInput,
    });
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", m: 5 }}>
        <Paper
          component="form"
          sx={{ p: "2px 4px", width: 400, display: "flex" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search movie"
            onChange={handleChange}
            value={valorDelInput}
          />
          <IconButton
            type="submit"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleClick}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          mt: 6,
        }}
      >
        {movies &&
          movies.map((movie) => (
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

export default Search;
