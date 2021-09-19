import { CSSPlugin } from "gsap/all";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import gsap from "gsap/gsap-core";
import { useEffect } from "react";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import ThemeMenu from "./ThemeMenu/ThemeMenu";
// import MouseAnimation from "./MouseAnimation/MouseAnimation";
import Projects from "./Projects/Projects.jsx";
import MouseAnimation from "./MouseAnimation/MouseAnimation";
import Cv from "./CV/Cv";
import Skills from "./Skills/Skills";
import About from "./About/About";
import Fun from "./Fun/Fun";
import PodeTest from "./Fun/podeTest/PodeTest";

function App() {
  useEffect(() => {
    gsap.registerPlugin(CSSPlugin);
    // gsap.to('.moon',{x:1200,duration:3})
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <MouseAnimation />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/cv" component={Cv} />
          <Route path="/skills" component={Skills} />
          <Route path="/about" component={About} />
          <Route path="/fun" component={Fun} />
          <Route path="/pode_test" component={PodeTest} />
        </Switch>
        <ThemeMenu />
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
