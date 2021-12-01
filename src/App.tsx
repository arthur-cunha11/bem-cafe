import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./services/firebase";
import "./styles/global.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produtos/salgados">
          <Products text={"salgados"} />
        </Route>
        <Route path="/produtos/bebidas">
          <Products text={"bebidas"} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
