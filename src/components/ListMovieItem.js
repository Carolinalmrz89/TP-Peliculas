import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";

const ListMovieItem = ({ image, title, link }) => {
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src={image} />
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <IconButton aria-label="delete" size="small">
          {link}
          <SendIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default ListMovieItem;
