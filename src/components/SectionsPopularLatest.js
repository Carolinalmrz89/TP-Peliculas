import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { urlBase, apiKey, mainColor } from "../auxiliaries/Auxiliaries";
import Button from "@mui/material/Button";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const SectionsPopularLatest = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const handleClickPrevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const handleClickNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    fetch(
      `${urlBase}${url}?api_key=${apiKey}&lenguage=es-AR&page=${pageNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [pageNumber]);

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
      <Box sx={{ display: "flex" }}>
        {pageNumber == 1 ? (
          <Button
            disabled
            startIcon={<ArrowBackIosNewOutlinedIcon />}
            sx={{ my: 2, mr: 3 }}
          ></Button>
        ) : (
          <Button
            startIcon={<ArrowBackIosNewOutlinedIcon />}
            onClick={handleClickPrevPage}
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
        )}

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
    </Box>
  );
};

export default SectionsPopularLatest;
