import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { BrowserRouter, Route, SWitch } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
