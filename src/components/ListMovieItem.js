import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";

const ListMovieItem = ({ image, title, link }) => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" width="450px" m={2}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar alt="Remy Sharp" src={image} />
          <Typography variant="subtitle1" ml={2}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            aria-label={link}
            size="small"
            sx={{
              ml: 4,
              ":hover": {
                color: "#282828",
                bgcolor: "transparent",
              },
            }}
          >
            <SendIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default ListMovieItem;
