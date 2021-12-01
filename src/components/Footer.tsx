import whatsapp from "../images/whatsapp.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";

import "../styles/footer.scss";

export const Footer = () => {
  return (
    <footer>
      <section className="footer__top">
        <div className="footer__top__contact">
          <h2>Contato</h2>
          <ul>
            <li>
              <a
                href="https://wa.me/5511974666798?text=Olá!%20Vim%20pelo%20site%20do%20Bem%20Café%20e%20gostaria%20de%20mais%20informações."
                rel="noreferrer"
                target="_blank"
              >
                <img src={whatsapp} alt="Ícone do WhatsApp" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/bemcafebp/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={instagram} alt="Ícone do Instagram" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/bemcafebp/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={facebook} alt="Ícone do Facebook" />
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__top__address">
          <h2>Endereço</h2>
          <p>Rua Cel. Leme, 499</p>
          <p>Centro</p>
          <p>Bragança Paulista</p>
          <p>São Paulo</p>
          <p>12900-300</p>
        </div>
        <div className="footer__top__map">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.60604800566998!2d-46.54031510510299!3d-22.96139205543248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6cd32bcd1564464a!2sPosto%20Europa%20II!5e0!3m2!1spt-BR!2sbr!4v1638286662567!5m2!1spt-BR!2sbr"
            loading="lazy"
          />
        </div>
      </section>
      <section className="footer__bottom">
        <a
          href="https://www.linkedin.com/in/arthur-cunha11/"
          rel="noreferrer"
          target="_blank"
        >
          <div>
            <p>Desenvolvido por: Arthur Cunha</p>
            <img src={linkedin} alt="Ícone do LinkedIn" />
          </div>
        </a>
      </section>
    </footer>
  );
};
