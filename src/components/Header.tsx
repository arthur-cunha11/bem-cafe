import { useEffect } from "react";
import { Link } from "react-router-dom";

import { underlineTarget, underlineText } from "../utils/UnderlineMenuOptions";

import logo from "../images/bem-cafe-logo.png";

import "../styles/header.scss";

export const Header = () => {
  useEffect(() => {
    const a = document.getElementsByTagName("a");

    for (let i = 0; i < a.length; i++) {
      if (window.location.pathname === "/" && a[i].text === "HOME")
        a[i].classList.add("active");

      if (
        window.location.pathname.indexOf(a[i].text.toLocaleLowerCase()) !== -1
      )
        a[i].classList.add("active");
    }
  }, []);

  return (
    <header>
      <Link onClick={() => underlineText("HOME")} to="/">
        <img src={logo} alt="Logo do Bem Café" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link onClick={(event) => underlineTarget(event)} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link onClick={(event) => underlineTarget(event)} to="/produtos">
              PRODUTOS
            </Link>
          </li>
          <li>
            <Link onClick={(event) => underlineTarget(event)} to="/sobre">
              SOBRE
            </Link>
          </li>
          <li>
            <Link onClick={(event) => underlineTarget(event)} to="/contato">
              CONTATO
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
