import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlBase, apiKey } from "../auxiliaries/Auxiliaries";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Button from "@mui/material/Button";

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
          key={movie.id}
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
              alignItems: "center",
              width: "100%",
              px: {
                xs: 2,
                sm: 4,
                md: 6,
              },
              py: {
                xs: 2,
                sm: 4,
                md: 6,
              },
              bgcolor: "#000000b0",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" gutterBottom>
              {movie.title}
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                  md: "16px",
                },
              }}
            >
              {movie.overview}
            </Typography>
            <Link
              to={`/movie-detail/${movie.id}`}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Button
                sx={{
                  mt: 4,
                  width: "300px",
                  p: 0,
                  ":hover": {
                    bgcolor: "transparent",
                  },
                }}
              >
                <IconButton
                  size="small"
                  sx={{
                    color: "white",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                    },
                    ":hover": {
                      bgcolor: "transparent",
                    },
                  }}
                >
                  More info{" "}
                  <ArrowForwardIosOutlinedIcon
                    sx={{ width: "12px", color: "white", ml: 1 }}
                  />
                </IconButton>
              </Button>
            </Link>
          </Box>
        </Paper>
      ))}
    </Carousel>
  );
};

export default CarouselHome;
