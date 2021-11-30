import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";

import "./services/firebase";
import "./styles/global.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/institutional/sobre" component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
