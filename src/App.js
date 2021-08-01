import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TeaShop from "./pages/TeaShop";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/teashop">
            <TeaShop />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
