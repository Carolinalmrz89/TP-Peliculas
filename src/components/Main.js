import Carousel from "./Carousel";
import Lists from "./Lists";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Main = () => {
  return (
    <Box>
      <h2>Main</h2>
      <Carousel />
      <Box sx={{ display: "flex", justifyContent: " space-evenly" }}>
        <Lists title="Películas populares" url="popular" />
        <Lists title="Películas mejor puntuadas" url="top_rated" />
      </Box>
    </Box>
  );
};

export default Main;
