import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Coffe } from "./pages/Coffe";
import { Snack } from "./pages/Snack";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
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
        <Route path="/produtos/cafes" component={Coffe} />
        <Route path="/produtos/salgados" component={Snack} />
        <Route path="/institucional/sobre" component={About} />
        <Route path="/contato" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
