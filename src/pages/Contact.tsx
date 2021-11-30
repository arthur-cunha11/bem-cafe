import { Button } from "../components/Button";

export const Contact = () => {
  return (
    <main>
      <h1>CONTATO</h1>
      <section className="section__top">
        <div className="section__top__whatsapp">
          <Button
            type="button"
            text="WhatsApp"
            style={{ background: "#25D366" }}
          />
        </div>
        <div className="section__top__facebook">
          <Button
            type="button"
            text="Facebook"
            style={{ background: "#8b9dc3" }}
          />
        </div>
      </section>
      <section className="section__bottom">
        <Button
          type="button"
          text="Instagram"
          style={{ background: "#F77737" }}
        />
        <img src="" alt="Slide show do instagram" />
      </section>
      <ul>
        <li>
          <a
            href="https://wa.me/5511974666798?text=Olá!%20Vim%20pelo%20site%20do%20Bem%20Café%20e%20gostaria%20de%20mais%20informações."
            rel="noreferrer"
            target="_blank"
          >
            .
          </a>
          <a
            href="https://www.instagram.com/bemcafebp/"
            rel="noreferrer"
            target="_blank"
          >
            .
          </a>
          <a
            href="https://www.facebook.com/bemcafebp/"
            rel="noreferrer"
            target="_blank"
          >
            .
          </a>
        </li>
        <li>
          <a href="tel:11974666798">(11) 97466-6798</a>
        </li>
        <li>Email: ###</li>
      </ul>
    </main>
  );
};
