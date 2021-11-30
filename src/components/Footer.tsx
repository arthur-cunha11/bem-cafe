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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.60604800566998!2d-46.54031510510299!3d-22.96139205543248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6cd32bcd1564464a!2sPosto%20Europa%20II!5e0!3m2!1spt-BR!2sbr!4v1638286662567!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            loading="lazy"
          />
        </div>
      </div>
      <div className="footer__bottom">
        <a
          href="https://www.linkedin.com/in/arthur-cunha11/"
          rel="noreferrer"
          target="_blank"
        >
          <p>Desenvolvido por: Arthur Cunha</p>
        </a>
      </div>
    </footer>
  );
};
