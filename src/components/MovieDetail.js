import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { urlBase, apiKey } from "../auxiliaries/Auxiliaries";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";

const MovieDetail = () => {
  const params = useParams();

  const [movieDetail, setMovieDetail] = useState([]);

  const [vote, setVote] = useState(0);

  useEffect(() => {
    fetch(`${urlBase}${params.idMovie}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetail(data);
        setVote(data);
      });
  }, []);

  return (
    <Box
      key={movieDetail.id}
      sx={{
        backgroundImage: `linear-gradient(rgb(0 0 0 / 66%), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
        display: "flex",
      }}
    >
      <Card
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",
          display: "flex",
          alignItems: "center",
          px: {
            md: 12,
            lg: 16,
          },
          mt: {
            xs: 3,
            sm: 6,
            md: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
          }}
        >
          <Box>
            <CardMedia
              component="img"
              sx={{ width: "300px", height: "400px" }}
              image={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
            />
          </Box>
          <CardContent
            sx={{
              ml: 6,
              m: {
                xs: 3,
                sm: 8,
                md: 2,
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Typography
                variant="h4"
                color="white"
                sx={{
                  lineHeight: "initial",
                  fontSize: {
                    xs: "28px",
                    sm: "34px",
                  },
                }}
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
              sx={{
                pt: 3,
                textAlign: "justify",
                fontWeight: 600,
              }}
            >
              {movieDetail.overview}
            </Typography>

            <Box>
              <Typography variant="h6" color="white" sx={{ pt: 3 }}>
                Genres:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {movieDetail.genres &&
                  movieDetail.genres.map((genre) => (
                    <Typography
                      key={genre.id}
                      variant="subtitle1"
                      color="white"
                      sx={{
                        fontSize: "14px",
                        px: "8px",
                        py: "4px",
                        textAlign: "justify",
                        fontWeight: 600,
                        border: "1px solid gray",
                        mr: "10px",
                        mt: "10px",
                        borderRadius: "5px",
                        border: "1px solid #acacac",
                        backgroundColor: "#0000009e",
                      }}
                    >
                      {genre.name}
                    </Typography>
                  ))}
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" color="white" sx={{ pt: 3 }}>
                Rating:
              </Typography>
              <Rating
                key={vote.id}
                name="read-only"
                value={vote && vote.vote_average / 2}
                readOnly
                color="yellow"
                sx={{ mt: 1 }}
              />
              <Typography color="white">{movieDetail.vote_average} </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default MovieDetail;
