import { useSearchParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { apiKey, mainColor } from "../auxiliaries/Auxiliaries";
import MovieCard from "./MovieCard";
import Button from "@mui/material/Button";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });

  const [movies, setMovies] = useState([]);

  const [valorDelInput, setValorDelInput] = useState("");

  const [pageNumber, setPageNumber] = useState(1);

  const [lastPage, setLastPage] = useState(0);

  const [showPagination, setShowPagination] = useState(false);

  const handleClickPrevPage = () => setPageNumber(pageNumber - 1);

  const handleClickNextPage = () => setPageNumber(pageNumber + 1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchParams.get(
        "query"
      )}&page=${pageNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLastPage(data.total_pages);
        setShowPagination(data.total_pages > 1);
      });
  }, [searchParams, pageNumber]);

  const handleChange = (e) => setValorDelInput(e.target.value);

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
            disabled={valorDelInput.length === 0}
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

      {showPagination && (
        <Box sx={{ display: "flex" }}>
          <Button
            startIcon={<ArrowBackIosNewOutlinedIcon />}
            onClick={handleClickPrevPage}
            disabled={pageNumber === 1}
            sx={{
              my: 2,
              mr: 3,
              color: mainColor,
              ":hover": {
                bgcolor: mainColor,
                border: `1px solid ${mainColor}`,
                color: "white",
              },
            }}
          ></Button>

          <Typography
            variant="h6"
            component="div"
            sx={{ m: 2, color: mainColor }}
          >
            Page {pageNumber}
          </Typography>
          <Button
            endIcon={<ArrowForwardIosOutlinedIcon />}
            onClick={handleClickNextPage}
            disabled={pageNumber === lastPage}
            sx={{
              my: 2,
              ml: 3,
              color: mainColor,
              ":hover": {
                bgcolor: mainColor,
                border: "`1px solid ${mainColor}`",
                color: "white",
              },
            }}
          ></Button>
        </Box>
      )}
    </Box>
  );
};

export default Search;
