import { CSSPlugin } from "gsap/all";
import gsap from "gsap/gsap-core";
import { useEffect } from "react";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import ThemeMenu from "./ThemeMenu/ThemeMenu";
import MouseAnimation from "./MouseAnimation/MouseAnimation";

function App() {
  useEffect(() => {
    gsap.registerPlugin( CSSPlugin )
   
  }, []);
  return (
    <div className="App">
      <Home/>
      <ThemeMenu/>
      <Menu/>
      <MouseAnimation/>
    </div>
  );
}

export default App;
