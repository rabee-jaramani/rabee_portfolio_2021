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

function App() {
  useEffect(() => {
    gsap.registerPlugin( CSSPlugin )

   
  }, []);
  return (
    <BrowserRouter>
    <div className="App">
    <MouseAnimation/>

          <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/projects' component={Projects}/>
              <Route path='/cv' component={Cv}/>
              <Route path='/skills' component={Skills}/>

          </Switch>
          <ThemeMenu/>
          <Menu/>

    </div>
    </BrowserRouter>

  );
}

export default App;
