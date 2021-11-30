import { Link } from "react-router-dom";

import "../styles/footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__top">
        <div className="footer__top__address">
          <p>
            Endereço: R Cel. Leme, 499 - Centro, Bragança Paulista - SP,
            12900-300
          </p>
        </div>
        <div className="footer__top__map">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d459.2120865767336!2d-46.54036679603843!3d-22.961394833835975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec996ba2a2e8d%3A0x57ee9d2e4c836571!2sPosto%20Shell!5e0!3m2!1spt-BR!2sbr!4v1638253368862!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            loading="lazy"
          />
        </div>
      </div>
      <div className="footer__mid">
        <ul>
          CONTATO
          <li>
            <a href="https://wa.me/5511974666798?text=Olá!%20Vim%20pelo%20site%20do%20Bem%20Café%20e%20gostaria%20de%20mais%20informações.">
              <img src="" alt="WhatsApp Icon" />
            </a>
            <a href="https://www.instagram.com/bemcafebp/">
              <img src="" alt="Instagram Icon" />
            </a>
            <a href="https://www.facebook.com/bemcafebp/">
              <img src="" alt="Facebook Icon" />
            </a>
          </li>
          <li>
            <a href="tel:11974666798">(11) 97466-6798</a>
          </li>
          <li>Email: ###</li>
        </ul>
        <ul>
          INSTITUCIONAL
          <li>
            <Link to="/institucional/sobre">Sobre o Bem Café</Link>
          </li>
        </ul>
      </div>
      <div className="footer__bottom">
        <a
          href="https://www.linkedin.com/in/arthur-cunha11/"
          rel="noreferrer"
          target="_blank"
        >
          <p>Desenvolvido por: Arthur Cunha</p>
          <img src={""} alt="LinkedIn icon" />
        </a>
      </div>
    </footer>
  );
};
