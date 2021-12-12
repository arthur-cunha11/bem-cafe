import { Banner } from "../components/Banner";

import bannerSecondary from "../images/banner-primary.jpg";

import "../styles/product-items.scss";

type ProductItemsProps = {
  text: string;
};

const MONGO_URL = `mongodb+srv://arthurcunha:<${process.env.REACT_APP_PASSWORD}>@bem-cafe.hunem.mongodb.net/bem_cafe?retryWrites=true&w=majority`;

export const ProductItems = ({ text }: ProductItemsProps) => {
  console.log(MONGO_URL);

  return (
    <main id="product-items">
      <Banner text={text} image={bannerSecondary} />
      <div className="container">
        <section></section>
      </div>
    </main>
  );
};
