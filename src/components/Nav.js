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
      <AppBar position="static" sx={{ bgcolor: "black" }}>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Buscador de películas
          </Typography>

          <Button>
            <Link to="/">Home</Link>
          </Button>
          <Button>
            <Link to="/new-movies">Ultimos Lanzamientos</Link>
          </Button>
          <Button>
            <Link to="/popular">Populares</Link>
          </Button>
          <Button>
            <Link to="/search">Buscar </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
