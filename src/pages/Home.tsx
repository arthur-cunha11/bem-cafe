import { Banner } from "../components/Banner";
import { InfoCard } from "../components/InfoCard";
import { Instagram } from "../components/Instagram";

import bannerPrimary from "../images/banner-primary.jpg";
import salgados from "../images/salgados.jpg";
import doces from "../images/doces.jpg";
import bebidas from "../images/bebidas.jpg";

import "../styles/home.scss";

type HomeProps = {
  text: string;
};

export const Home = ({ text }: HomeProps) => {
  return (
    <main id="home">
      <Banner text={text} image={bannerPrimary} />
      <div className="container">
        <h1>CONHEÇA NOSSOS PRODUTOS</h1>
        <section className="info-card__flex">
          <InfoCard text="salgados" image={salgados} />
          <InfoCard text="doces" image={doces} />
          <InfoCard text="bebidas" image={bebidas} />
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
