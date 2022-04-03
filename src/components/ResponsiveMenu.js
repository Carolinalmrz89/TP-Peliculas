import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";

const ResponsiveMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, color: "white" }}
        >
          <MenuIcon />
        </IconButton>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            backgroundColor: "#282828",
            ":hover": {
              bgcolor: "#1e1d1dde",
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
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            backgroundColor: "#282828",
            ":hover": {
              bgcolor: "#1e1d1dde",
            },
          }}
        >
          <Link
            to="/new-movies"
            style={{ textDecoration: "none", color: "white" }}
          >
            Ultimos Lanzamientos
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            backgroundColor: "#282828",
            ":hover": {
              bgcolor: "#1e1d1dde",
            },
          }}
        >
          <Link
            to="/popular"
            style={{ textDecoration: "none", color: "white" }}
          >
            Populares
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            backgroundColor: "#282828",
            ":hover": {
              bgcolor: "#1e1d1dde",
            },
          }}
        >
          <Link to="/search" style={{ textDecoration: "none", color: "white" }}>
            Buscar
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ResponsiveMenu;
