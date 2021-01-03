import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper"
import NavBar from "./components/NavBar/NavBar"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import Footer from "./components/Footer"

function App() {
  return (    
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <NavBar />
      <Wrapper>
      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
        </Switch>
      </Wrapper>
      <Footer />
    </div>
  </Router>);
}

export default App;
