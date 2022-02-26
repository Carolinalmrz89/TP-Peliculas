import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NewMovies from "./components/NewMovies";
import Popular from "./components/Popular";
import Search from "./components/Search";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new-movies" element={<NewMovies />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie-detail/:idMovie" element={<Search />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
