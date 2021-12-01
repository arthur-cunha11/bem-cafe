import banner from "../images/banner-home.jpg";

import "../styles/products.scss";

type ProductsProps = {
  text: string;
};

export const Products = ({ text }: ProductsProps) => {
  return (
    <main id="products">
      <section className="banner">
        <img src={banner} alt="Banner de salgados" />
      </section>
      <div className="container">
        <section>
          <h1>{text}</h1>
        </section>
      </div>
    </main>
  );
};
