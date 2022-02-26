import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h2>Nav</h2>

      <ul>
        <li>
          {" "}
          <Link to="/"> Home </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/new-movies">Ultimos Lanzamientos</Link>
        </li>
        <li>
          <Link to="/popular">Populares </Link>
        </li>
        <li>
          {" "}
          <Link to="/search">Buscar</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
