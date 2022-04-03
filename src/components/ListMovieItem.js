import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { mainColor } from "../auxiliaries/Auxiliaries";

const ListMovieItem = ({ image, title, link }) => {
  return (
    <Link
      to={link}
      style={{
        textDecoration: "none",
        color: mainColor,
      }}
    >
      <Box>
        <Stack direction="row" justifyContent="space-between" m={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: {
                xs: "80%",
                sm: "85%",
                md: "80%",
                lg: "85%",
              },
            }}
          >
            <Avatar alt="Remy Sharp" src={image} />
            <Typography
              variant="subtitle1"
              ml={2}
              sx={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="small"
              sx={{
                ml: 4,
                ":hover": {
                  color: "#282828",
                  bgcolor: "transparent",
                },
              }}
            >
              <ArrowForwardIosOutlinedIcon sx={{ width: "16px" }} />
            </IconButton>
          </Box>
        </Stack>
      </Box>
    </Link>
  );
};

export default ListMovieItem;
