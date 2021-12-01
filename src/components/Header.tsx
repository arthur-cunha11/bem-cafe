import { Link } from "react-router-dom";

import logo from "../images/bem-cafe-logo.png";

import "../styles/header.scss";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo do Bem Café" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/produtos/salgados">SALGADOS</Link>
          </li>
          <li>
            <Link to="/produtos/bebidas">BEBIDAS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
