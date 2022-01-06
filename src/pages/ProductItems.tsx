import { useEffect, useState } from "react";

import { app } from "../services/Firebase";
import { getDatabase, ref, onValue } from "firebase/database";

import { Banner } from "../components/Banner";

import bannerSecondary from "../images/banner-primary.jpg";

import "../styles/product-items.scss";

type ProductItemsProps = {
  type: string;
};

type ProductsInfo = [
  {
    descricao: string;
    imagem: string;
    nome: string;
  }
];

export const ProductItems = ({ type }: ProductItemsProps) => {
  const [products, setProducts] = useState([{}] as ProductsInfo);

  // Get a reference to the database service
  const database = getDatabase(app);
  const databaseProducts = ref(database, "produtos");

  useEffect(() => {
    onValue(databaseProducts, (snapshot) => {
      const data = snapshot.val();

      switch (type.toLowerCase()) {
        case "salgados":
          return setProducts(data?.salgados);
        case "doces":
          return setProducts(data?.doces);
        case "bebidas":
          return setProducts(data?.bebidas);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main id="product-items">
      <Banner text={type} image={bannerSecondary} />
      <div className="container">
        <section>
          {products?.map((element, id) => {
            return (
              <div key={id}>
                <img src={element?.imagem} alt="Imagem do produto" />
                <h2>{element?.nome}</h2>
                <p>{element?.descricao}</p>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
};
