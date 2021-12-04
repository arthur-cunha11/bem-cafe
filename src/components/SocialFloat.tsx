import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const SocialFloat = () => {
  return (
    <section className="social-float">
      <ul>
        <li>
          <a
            href="https://wa.me/5511974666798?text=Olá!%20Vim%20pelo%20site%20do%20Bem%20Café%20e%20gostaria%20de%20mais%20informações."
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/bemcafebp/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/bemcafebp/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </li>
      </ul>
    </section>
  );
};
