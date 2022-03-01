import { useSearchParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { useState } from "react";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });

  const [valorDelInput, setValorDelInput] = useState("");

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSearchParams({
      query: valorDelInput,
    });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", m: 5 }}>
      <Paper
        component="form"
        sx={{ p: "2px 4px", width: 400, display: "flex" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search movie"
          onChange={handleChange}
          value={valorDelInput}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleClick}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Search;
