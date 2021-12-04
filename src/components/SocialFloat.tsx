import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/social-float.scss";

export const SocialFloat = () => {
  return (
    <section className="social-float">
      <ul>
        <li>
          <a
            className="whatsapp"
            href="https://wa.me/5511974666798?text=Olá!%20Vim%20pelo%20site%20do%20Bem%20Café%20e%20gostaria%20de%20mais%20informações."
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            <p>FALE CONOSCO</p>
          </a>
        </li>
        <li>
          <a
            className="instagram"
            href="https://www.instagram.com/bemcafebp/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <p>SIGA NOSSO PERIL</p>
          </a>
        </li>
        <li>
          <a
            className="facebook"
            href="https://www.facebook.com/bemcafebp/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <p>CURTA NOSSA PÁGINA</p>
          </a>
        </li>
      </ul>
    </section>
  );
};
