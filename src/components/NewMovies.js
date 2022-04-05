import { Box } from "@mui/material";
import SectionsPopularLatest from "./SectionsPopularLatest";

const NewMovies = () => {
  return (
    <Box>
      <SectionsPopularLatest title="Últimos lanzamientos" url="now_playing" />
    </Box>
  );
};

export default NewMovies;
