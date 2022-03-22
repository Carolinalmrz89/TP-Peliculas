import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { urlBase, apiKey } from "../auxiliaries/Auxiliaries";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const MovieDetail = () => {
  const params = useParams();

  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    fetch(`${urlBase}${params.idMovie}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetail(data);
      });
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "90vh",
        display: "flex",
      }}
    >
      <Card
        key={movieDetail.id}
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",
          display: "flex",
          alignItems: "center",
          px: 16,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box>
            <CardMedia
              component="img"
              sx={{ width: "300px", height: "400px" }}
              image={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
            />
          </Box>
          <CardContent sx={{ ml: 6 }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Typography
                variant="h4"
                color="white"
                sx={{ lineHeight: "initial" }}
              >
                {movieDetail.title}{" "}
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#acacac", fontWeight: 600, pl: 2 }}
              >
                {movieDetail.release_date &&
                  movieDetail.release_date.slice(0, 4)}
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              color="white"
              sx={{ pt: 3, textAlign: "justify", fontWeight: 600 }}
            >
              {movieDetail.overview}
            </Typography>

            {movieDetail.genres &&
              movieDetail.genres.map((genre) => (
                <Typography
                  variant="subtitle1"
                  color="white"
                  sx={{ pt: 3, textAlign: "justify", fontWeight: 600 }}
                >
                  {genre.name}
                </Typography>
              ))}
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default MovieDetail;
