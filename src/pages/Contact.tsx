import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarked,
  faBusinessTime,
  faPhoneAlt,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";

import { Banner } from "../components/Banner";

import bannerSecondary from "../images/banner-primary.jpg";

import "../styles/contact.scss";

type ContactProps = {
  text: string;
};

export const Contact = ({ text }: ContactProps) => {
  return (
    <main id="contact">
      <Banner text={text} image={bannerSecondary} />
      <div className="container">
        <section>
          <div className="contact__item">
            <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
            <div className="contact__item__text">
              <h2>Telefone</h2>
              <a href="tel:11974666798">(11) 97466-6798</a>
            </div>
          </div>
          <div className="contact__item">
            <FontAwesomeIcon icon={faHashtag} size="2x" />
            <div className="contact__item__text">
              <h2>Redes Sociais</h2>
              <div className="contact__item__social">
                <a
                  href="https://www.facebook.com/bemcafebp/"
                  rel="noreferrer"
                  target="_blank"
                >
                  facebook.com/bemcafebp/
                </a>
                <a
                  href="https://www.instagram.com/bemcafebp/"
                  rel="noreferrer"
                  target="_blank"
                >
                  instagram.com/bemcafebp/
                </a>
              </div>
            </div>
          </div>
          <div className="contact__item">
            <FontAwesomeIcon icon={faMapMarked} size="2x" />
            <div className="contact__item__text">
              <h2>Localização</h2>
              <a
                href="https://goo.gl/maps/KapyUT2GVvmpwsa7A"
                rel="noreferrer"
                target="_blank"
              >
                Rua Cel. Leme, 499 - Centro, Bragança Paulista - SP, 12900-300
              </a>
            </div>
          </div>
          <div className="contact__item">
            <FontAwesomeIcon icon={faBusinessTime} size="2x" />
            <div className="contact__item__text">
              <h2>Horário</h2>
              <div>
                <p>Segunda a Sexta - 07:30h às 19h</p>
                <p>Sábado - 08h às 13h</p>
                <p>Domingo - Fechado</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
