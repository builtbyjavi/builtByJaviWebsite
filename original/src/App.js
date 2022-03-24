import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Portfolio from './components/pages/Portfolio/Portfolio';
import About from './components/pages/About/About';
import Interests from './components/pages/Interests/Interests';
import ProjectOne from './components/pages/ProjectOne/ProjectOne';
import ProjectThree from './components/pages/ProjectThree/ProjectThree';
import ComeThru from './components/pages/ComeThru/ComeThru';
import ProjectTwo from './components/pages/ProjectTwo/ProjectTwo';
import Contact from './components/pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/about" component={About}/>
        <Route path="/interests" component={Interests}/>
        <Route path="/ProjectOne" component={ProjectOne}/>
        <Route path="/ProjectThree" component={ProjectThree}/>
        <Route path="/ComeThru" component={ComeThru}/>
        <Route path="/ProjectTwo" component={ProjectTwo}/>
        <Route path="/Contact" component={Contact}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
