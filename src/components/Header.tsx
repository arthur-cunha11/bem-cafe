import { Link } from "react-router-dom";

import "../styles/header.scss";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="" alt="Logo do Bem Café" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/institucional/sobre">SOBRE</Link>
          </li>
          <li>
            <Link to="/contato">CONTATO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
