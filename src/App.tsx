import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Drinks } from "./pages/Drinks";
import { Snacks } from "./pages/Snacks";
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
        <Route path="/produtos/salgados" component={Snacks} />
        <Route path="/produtos/bebidas" component={Drinks} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
