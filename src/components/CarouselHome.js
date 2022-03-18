import React from "react";
import { useEffect, useState } from "react";
import { urlBase, apiKey } from "../auxiliaries/Auxiliaries";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50% 30%",
            opacity: 2.5,
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              px: 28,
              py: 3,
              bgcolor: "#000000b0",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="body1">{movie.overview}</Typography>
          </Box>
        </Paper>
      ))}
    </Carousel>
  );
};

export default CarouselHome;
