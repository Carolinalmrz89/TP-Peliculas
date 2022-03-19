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
      .then((data) => setMovieDetail(data));
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "90vh",
      }}
    >
      <Card
        sx={{
          height: "90vh",
          bgcolor: "#000000b0",
          display: "flex",
          alignItems: "center",
          pl: 10,
        }}
      >
        <Box sx={{ display: "flex", width: "700px" }}>
          <CardMedia
            component="img"
            sx={{ width: "300px", height: "400px" }}
            image={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
          />
          <CardContent sx={{ flex: "1 0 auto", width: "100%" }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Typography variant="h4" color="white">
                {movieDetail.title}{" "}
              </Typography>
              <Typography variant="h5" color="grey">
                {movieDetail.release_date}
              </Typography>
            </Box>
            <Typography variant="subtitle1" color="white">
              {movieDetail.overview}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default MovieDetail;
