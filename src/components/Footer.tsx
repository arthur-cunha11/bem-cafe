import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import logo from "../images/bem-cafe-logo.png";

import "../styles/footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <section className="footer__top">
          <div className="footer__top__info">
            <img src={logo} alt="Logo do Bem Café" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>
          <div className="footer__top__menu">
            <h2>Menu</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/produtos">Produtos</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </div>
          <div className="footer__top__address">
            <h2>Endereço</h2>
            <div>
              <p>Rua Cel. Leme, 499</p>
              <p>Centro</p>
              <p>Bragança Paulista</p>
              <p>São Paulo</p>
              <p>12900-300</p>
            </div>
          </div>
          <div className="footer__top__business-hours">
            <h2>Horário de Funcionamento</h2>
            <div>
              <p>Segunda a Sexta - 7:30h às 19h</p>
              <p>Sábado - 8h às 13h</p>
              <p>Domingo - Fechado</p>
            </div>
          </div>
        </section>
        <section className="footer__bottom">
          <a
            href="https://www.linkedin.com/in/arthur-cunha11/"
            rel="noreferrer"
            target="_blank"
          >
            <div>
              <p>
                Desenvolvido por: <span>Arthur Cunha</span>
              </p>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </a>
        </section>
      </div>
    </footer>
  );
};
