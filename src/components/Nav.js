import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ResponsiveMenu from "./ResponsiveMenu";
import { FaVideo } from "react-icons/fa";
import { IconButton } from "@mui/material";

const Nav = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ bgcolor: "#282828", height: "10vh" }}>
        <Toolbar>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1, fontSize: "22px" }}
            >
              <FaVideo />
            </IconButton>
          </Link>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Buscador de películas
          </Typography>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "inline",
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
              <Button
                sx={{
                  mr: 3,
                  color: "white",
                  ":hover": {
                    bgcolor: "#1e1d1dde",
                    py: "15px",
                  },
                }}
              >
                Home
              </Button>
            </Link>

            <Link
              to="/new-movies"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                sx={{
                  mr: 3,
                  color: "white",
                  ":hover": {
                    bgcolor: "#1e1d1dde",
                    py: "15px",
                  },
                }}
              >
                Ultimos Lanzamientos
              </Button>
            </Link>

            <Link
              to="/popular"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                sx={{
                  mr: 3,
                  color: "white",
                  ":hover": {
                    bgcolor: "#1e1d1dde",
                    py: "15px",
                  },
                }}
              >
                Populares
              </Button>
            </Link>
            <Link
              to="/search"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                sx={{
                  mr: 3,
                  color: "white",
                  ":hover": {
                    bgcolor: "#1e1d1dde",
                    py: "15px",
                  },
                }}
              >
                Buscar
              </Button>
            </Link>
          </Box>

          <Box
            sx={{
              display: {
                xs: "inline",
                md: "none",
              },
            }}
          >
            <ResponsiveMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
