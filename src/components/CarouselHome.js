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
    >
      {movies.map((movie) => (
        <Box>
          <Paper>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </Paper>
        </Box>
      ))}
    </Carousel>
  );
};

export default CarouselHome;
