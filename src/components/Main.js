import CarouselHome from "./CarouselHome";
import Lists from "./Lists";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Main = () => {
  return (
    <Box>
      <CarouselHome />
      <Box sx={{ display: "flex", justifyContent: " space-evenly", pb: 6 }}>
        <Lists title="Películas populares" url="popular" />
        <Lists title="Películas mejor puntuadas" url="top_rated" />
      </Box>
    </Box>
  );
};

export default Main;
