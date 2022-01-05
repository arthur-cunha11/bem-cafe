import { useEffect, useState } from "react";

import { app } from "../services/Firebase";
import { getDatabase, ref, onValue } from "firebase/database";

import { Banner } from "../components/Banner";

import bannerSecondary from "../images/banner-primary.jpg";

import "../styles/product-items.scss";

type ProductItemsProps = {
  type: string;
};

type Products = {
  bebidas: ProductsInfo;
  doces: ProductsInfo;
  salgados: ProductsInfo;
};

type ProductsInfo = [
  {
    descricao: string;
    imagem: string;
    nome: string;
  }
];

export const ProductItems = ({ type }: ProductItemsProps) => {
  const [products, setProducts] = useState({} as Products);
  const [productsInfo, setProductsInfo] = useState({} as ProductsInfo);

  // Get a reference to the database service
  const database = getDatabase(app);
  const databaseProducts = ref(database, "produtos");

  useEffect(() => {
    onValue(databaseProducts, (snapshot) => {
      const data = snapshot.val();
      setProducts(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    switch (type.toLowerCase()) {
      case "salgados":
        return setProductsInfo(products?.salgados);
      case "doces":
        return setProductsInfo(products?.doces);
      case "bebidas":
        return setProductsInfo(products?.bebidas);
    }
  }, [products, type]);

  return (
    <main id="product-items">
      <Banner text={type} image={bannerSecondary} />
      <div className="container">
        <section>
          <div>
            <img src={productsInfo?.[0]?.imagem} alt="Imagem do produto" />
            <h2>{productsInfo?.[0]?.nome}</h2>
            <p>{productsInfo?.[0]?.descricao}</p>
          </div>
        </section>
      </div>
    </main>
  );
};
