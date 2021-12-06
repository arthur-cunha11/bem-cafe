import { Link } from "react-router-dom";

import { Banner } from "../components/Banner";
import { Instagram } from "../components/Instagram";

import { underlineText } from "../utils/UnderlineMenuOptions";

import bannerSecondary from "../images/banner-primary.jpg";
import salgados from "../images/salgados.jpg";

import "../styles/about.scss";

type AboutProps = {
  text: string;
};

export const About = ({ text }: AboutProps) => {
  return (
    <main id="about">
      <Banner text={text} image={bannerSecondary} />
      <div className="container">
        <section>
          <img src={salgados} alt="Frente da loja" />
          <div>
            <span>Bem-vindo</span>
            <h1>Bem Café</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <Link onClick={() => underlineText("CONTATO")} to="/contato">
              Fale Conosco
            </Link>
          </div>
        </section>
        <Instagram />
      </div>
    </main>
  );
};
