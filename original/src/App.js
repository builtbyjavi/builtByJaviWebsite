import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/HomePage/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Interests from "./pages/Interests/Interests";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/interests" component={Interests} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
