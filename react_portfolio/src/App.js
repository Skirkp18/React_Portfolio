import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper"
import NavBar from "./components/NavBar/NavBar"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"

function App() {
  return (    
  <Router>
    <div>
      <NavBar />
      <Wrapper>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
      </Wrapper>
    </div>
  </Router>);
}

export default App;
