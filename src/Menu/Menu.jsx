import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-flex">
      <Link to="/">
        <div className="menu-item item0" id="item0">
          Home
        </div>
      </Link>
      <Link to="/about">
        <div className="menu-item item1" id="item1">
          About
        </div>
      </Link>
      <Link to="/projects">
        <div className="menu-item item2" id="item2">
          Projects
        </div>
      </Link>

      <Link to="/skills">
        <div className="menu-item item3" id="item3">
          Skills
        </div>
      </Link>
      <Link to="/cv">
        <div className="menu-item item4" id="item4">
          My CV
        </div>
      </Link>
      <Link to="/fun">
        <div className="menu-item item5" id="item5">
          Fun
        </div>
      </Link>

      <Link to="/contact">
        <div className="menu-item item6" id="item6">
          Contact
        </div>
      </Link>

      {/* <div className="menu-item item7" id="item7">
        Api
      </div> */}
    </div>
  );
};

export default Menu;
