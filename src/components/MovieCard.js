import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link } from "react-router-dom";

const MovieCard = ({ image, title, link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          width: 250,
          height: 450,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          m: 0.5,
          mb: 4,
          boxShadow: "none",
          border: "1px solid #adadad",
          ":hover": {
            boxShadow:
              " 0px 5px 1px -1px rgb(0 0 0 / 12%), 0px 1px 1px 0px rgb(0 0 0 / 18%), 0px 1px 3px 0px rgb(0 0 0 / 12%);",
          },
        }}
      >
        <CardMedia
          component="img"
          height={"360px"}
          image={image}
          alt={`img-${title}`}
        />
        <CardContent sx={{ p: 1.4 }}>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              width: 200,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
        </CardContent>

        <CardActions sx={{ p: 0 }}>
          <Link to={link}>
            <IconButton
              sx={{
                p: 0,
                ":hover": {
                  color: "#282828",
                  bgcolor: "transparent",
                },
              }}
            >
              <ArrowForwardIosOutlinedIcon sx={{ width: "16px" }} />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    </Link>
  );
};

export default MovieCard;
