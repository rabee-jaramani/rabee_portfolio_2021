import gsap from "gsap/all";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { itemsList } from "./aboutItems";
import Griditem from "./Griditem";
const About = () => {
  const season_name = useSelector((state) => state.Season.season_name);
  useEffect(() => {
    if (season_name === "winter") {
      gsap.to(".brief", { backgroundColor: "rgb(49,84,122,0.5)" });
      gsap.to(".inside", { backgroundColor: "rgb(49,84,122,0.5)" });
    }
    if (season_name === "spring") {
      gsap.to(".brief", { backgroundColor: "rgb(199,12,71,0.5)" });
      gsap.to(".inside", { backgroundColor: "rgb(199,12,71,0.5)" });
    }
    if (season_name === "summer") {
      gsap.to(".brief", { backgroundColor: "rgb(60,185,165,0.5)" });
      gsap.to(".inside", { backgroundColor: "rgb(60,185,165,0.5)" });
    }
    if (season_name === "autumn") {
      gsap.to(".brief", { backgroundColor: "rgb(167,83,45,0.5)" });
      gsap.to(".inside", { backgroundColor: "rgb(167,83,45,0.5)" });
    }
    if (season_name === "bw") {
      gsap.to(".brief", { backgroundColor: "rgba(0, 0, 0, 0.603)" });
      gsap.to(".inside", { backgroundColor: "rgba(0, 0, 0, 0.603)" });
    }
  }, [season_name]);
  return (
    <div className="about-cont">
      <h1 className="title">ABOUT</h1>
      <div className="brief">
        First-rate Informatics Engineer with Innovative tech mind and +9 years
        of experience in developing, programming and supporting. A FrontEnd
        developer with 2 years' experience in React-js, JavaScript, HTML CSS and
        more. A solid understanding of how systems and applications work.
        Ambitious problem solver with a passion for Online businesses and would
        like to join a team of like-minded developers. Constantly striving to
        improve myself and enhance my skills in technologies.
      </div>
      <div className="about-grid">
        {itemsList.map((e) => {
          return (
            <Griditem
              key={e.id}
              itemClass={e.itemClass}
              doorClass={e.doorClass}
              dateClass={e.dateClass}
              roleClass={e.roleClass}
              date={e.date}
              role={e.role}
              country={e.country}
              map={e.map}
              about={e.about}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
