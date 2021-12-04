import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductItems } from "./pages/ProductItems";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

import { Header } from "./components/Header";
import { SocialFloat } from "./components/SocialFloat";
import { ScrollToTop } from "./components/ScrollToTop";
import { Footer } from "./components/Footer";

import "./styles/global.scss";

import "./services/firebase";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <SocialFloat />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Home text={"Bem Café"} />
        </Route>
        <Route path="/produtos" exact>
          <Products text={"Produtos"} />
        </Route>
        <Route path="/sobre" exact>
          <About text={"Sobre nós"} />
        </Route>
        <Route path="/contato" exact>
          <Contact text={"Contato"} />
        </Route>
        <Route path="/produtos/salgados" exact>
          <ProductItems text={"Salgados"} />
        </Route>
        <Route path="/produtos/doces" exact>
          <ProductItems text={"Doces"} />
        </Route>
        <Route path="/produtos/bebidas" exact>
          <ProductItems text={"Bebidas"} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
