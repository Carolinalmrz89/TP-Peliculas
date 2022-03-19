import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

const Nav = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ bgcolor: "#282828", height: "10vh" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, m: 3 }}>
            Buscador de películas
          </Typography>

          <Button
            sx={{
              mr: 3,
              ":hover": {
                bgcolor: "#1e1d1dde",
                py: "15px",
              },
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Home
            </Link>
          </Button>
          <Button
            sx={{
              mr: 3,
              ":hover": {
                bgcolor: "#1e1d1dde",
                py: "15px",
              },
            }}
          >
            <Link
              to="/new-movies"
              style={{ textDecoration: "none", color: "white" }}
            >
              Ultimos Lanzamientos
            </Link>
          </Button>
          <Button
            sx={{
              mr: 3,
              ":hover": {
                bgcolor: "#1e1d1dde",
                py: "15px",
              },
            }}
          >
            <Link
              to="/popular"
              style={{ textDecoration: "none", color: "white" }}
            >
              Populares
            </Link>
          </Button>
          <Button
            sx={{
              mr: 3,
              ":hover": {
                bgcolor: "#1e1d1dde",
                py: "15px",
              },
            }}
          >
            <Link
              to="/search"
              style={{ textDecoration: "none", color: "white" }}
            >
              Buscar
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
