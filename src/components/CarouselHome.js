import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { urlBase, apiKey } from "../auxiliaries/Auxiliaries";
import Box from "@mui/material/Box";

const CarouselHome = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${urlBase}now_playing?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <Carousel
      animation="slide"
      navButtonsAlwaysInvisible={true}
      interval={5000}
      sx={{ mb: 6 }}
    >
      {movies.map((movie) => (
        <Paper
          sx={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: "-20",
            backgroundPosition: "50% 50%",
            height: "400px",
          }}
        >
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </Paper>
      ))}
    </Carousel>
  );
};

export default CarouselHome;
