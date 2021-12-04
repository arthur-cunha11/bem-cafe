import { Banner } from "../components/Banner";
import { InfoCard } from "../components/InfoCard";

import bannerSecondary from "../images/banner-primary.jpg";
import salgados from "../images/salgados.jpg";
import doces from "../images/doces.jpg";
import bebidas from "../images/bebidas.jpg";

import "../styles/products.scss";

type ProductsProps = {
  text: string;
};

export const Products = ({ text }: ProductsProps) => {
  return (
    <main id="products">
      <Banner text={text} image={bannerSecondary} />
      <section className="info-card__flex">
        <InfoCard text="salgados" image={salgados} />
        <InfoCard text="doces" image={doces} />
        <InfoCard text="bebidas" image={bebidas} />
      </section>
    </main>
  );
};
