import bannerSnacks from "../images/banner-home.jpg";
import bannerDrinks from "../images/banner-home.jpg";

import "../styles/products.scss";

type ProductsProps = {
  text: string;
};

export const Products = ({ text }: ProductsProps) => {
  const handleImg = (type: string) => {
    switch (type) {
      case "salgados":
        return bannerSnacks;
      case "bebidas":
        return bannerDrinks;
    }
  };

  return (
    <main id="products">
      <section className="banner">
        <img src={handleImg(text)} alt="Banner de salgados" />
      </section>
      <div className="container">
        <section>
          <h1>{text}</h1>
        </section>
      </div>
    </main>
  );
};
