import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './pages/Footer/Footer';
import Home from './pages/HomePage/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Interests from './pages/Interests/Interests';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/about" component={About}/>
        <Route path="/interests" component={Interests}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/Contact" component={Contact}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
