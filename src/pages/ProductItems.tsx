import { app } from "../services/firebase";

import { Banner } from "../components/Banner";

import bannerSecondary from "../images/banner-primary.jpg";

import "../styles/product-items.scss";

type ProductItemsProps = {
  text: string;
};

export const ProductItems = ({ text }: ProductItemsProps) => {
  console.log("teste: ", app);

  return (
    <main id="product-items">
      <Banner text={text} image={bannerSecondary} />
      <div className="container">
        <section></section>
      </div>
    </main>
  );
};
