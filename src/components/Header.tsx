import { Link } from "react-router-dom";

import logo from "../images/bem-cafe-logo.png";

import "../styles/header.scss";

export const Header = () => {
  const handleClick = (element: EventTarget) => {
    const target = element as HTMLTextAreaElement;

    for (let i = 0; i < document.getElementsByTagName("a").length; i++) {
      document.getElementsByTagName("a")[i].classList.remove("active");
    }

    target.classList.add("active");
  };

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo do Bem Café" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link onClick={(event) => handleClick(event.target)} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link onClick={(event) => handleClick(event.target)} to="/produtos">
              PRODUTOS
            </Link>
          </li>
          <li>
            <Link onClick={(event) => handleClick(event.target)} to="/sobre">
              SOBRE
            </Link>
          </li>
          <li>
            <Link onClick={(event) => handleClick(event.target)} to="/contato">
              CONTATO
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
