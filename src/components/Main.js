import CarouselHome from "./CarouselHome";
import Lists from "./Lists";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Main = () => {
  return (
    <Box>
      <CarouselHome />
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
          justifyContent: {
            sm: "center",
            md: " space-evenly",
          },
          alignItems: "center",
          pb: 6,
        }}
      >
        <Lists title="Películas populares" url="popular" />
        <Lists title="Películas mejor puntuadas" url="top_rated" />
      </Box>
    </Box>
  );
};

export default Main;
