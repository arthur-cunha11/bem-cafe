import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { ProductItems } from "./pages/ProductItems";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

import { Header } from "./components/Header";
import { SocialFloat } from "./components/SocialFloat";
import { ScrollToTop } from "./components/ScrollToTop";
import { Footer } from "./components/Footer";

import "./styles/global.scss";

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
          <ProductPage text={"Produtos"} />
        </Route>
        <Route path="/sobre" exact>
          <About text={"Sobre nós"} />
        </Route>
        <Route path="/contato" exact>
          <Contact text={"Contato"} />
        </Route>
        <Route path="/produtos/salgados" exact>
          <ProductItems type={"Salgados"} />
        </Route>
        <Route path="/produtos/doces" exact>
          <ProductItems type={"Doces"} />
        </Route>
        <Route path="/produtos/bebidas" exact>
          <ProductItems type={"Bebidas"} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
