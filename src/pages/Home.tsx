import { InfoCard } from "../components/InfoCard";
import { Instagram } from "../components/Instagram";

import banner from "../images/banner-home.jpg";
import snacks from "../images/snacks.jpg";
import drinks from "../images/drinks.jpg";

import "../styles/home.scss";

export const Home = () => {
  return (
    <main id="home">
      <section className="banner">
        <img src={banner} alt="Banner da home" />
      </section>
      <div className="container">
        <h1>CONHEÇA NOSSOS PRODUTOS</h1>
        <section className="info-card__grid">
          <InfoCard text="salgados" image={snacks} />
          <InfoCard text="bebidas" image={drinks} />
        </section>
      </div>
      <section className="info-section">
        <div className="container">
          <h2>Sobre o Bem Café</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>
      <div className="container">
        <section className="instagram">
          <h1>GALERIA DE FOTOS</h1>
          <Instagram />
        </section>
      </div>
    </main>
  );
};
