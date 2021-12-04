import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductItems } from "./pages/ProductItems";

import { Header } from "./components/Header";
import { SocialFloat } from "./components/SocialFloat";
import { Footer } from "./components/Footer";

import "./styles/global.scss";

import "./services/firebase";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <SocialFloat />
      <Switch>
        <Route path="/" exact>
          <Home text={"Bem Café"} />
        </Route>
        <Route path="/produtos">
          <Products text={"Produtos"} />
        </Route>
        <Route path="/sobre">
          <ProductItems text={"Sobre nós"} />
        </Route>
        <Route path="/contato">
          <ProductItems text={"Contato"} />
        </Route>
        <Route path="/produtos/salgados">
          <ProductItems text={"Salgados"} />
        </Route>
        <Route path="/produtos/doces">
          <ProductItems text={"Doces"} />
        </Route>
        <Route path="/produtos/bebidas">
          <ProductItems text={"Bebidas"} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
