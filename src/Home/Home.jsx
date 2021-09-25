import React, { useEffect } from "react";
import hello from "../images/hello.webp";
import me from "../images/rabee2.webp";
// import $ from 'jquery'
import { useSelector } from "react-redux";
import { Timeline } from "gsap/gsap-core";
import Steve from "./Steve/Steve";
import Moon from "./Moon";
import gsap, { Sine } from "gsap/all";
import alien from "../images/alien/alien.webp";
const Home = () => {
  const season_img_ext = useSelector((state) => state.Season.season_img_ext);
  const season = useSelector((state) => state.Season);

  useEffect(() => {
    // set alien image
    // ////////////////////////////// alien floating

    const alien = document.querySelector(".animation-cont");

    const randomX = random(10, 40);
    const randomY = random(40, 60);
    const randomTime = random(3, 5);
    const randomTime2 = random(5, 10);
    const randomAngle = random(8, 12);

    gsap.set(alien, {
      x: randomX(-1),
      y: randomX(1),
      rotation: randomAngle(-1),
    });

    moveX(alien, 1);
    moveY(alien, -1);
    rotate(alien, 1);

    function rotate(target, direction) {
      gsap.to(target, randomTime2(), {
        rotation: randomAngle(direction),
        // delay: randomDelay(),
        ease: Sine.easeInOut,
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveX(target, direction) {
      gsap.to(target, randomTime(), {
        x: randomX(direction),
        ease: Sine.easeInOut,
        onComplete: moveX,
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveY(target, direction) {
      gsap.to(target, randomTime(), {
        y: randomY(direction),
        ease: Sine.easeInOut,
        onComplete: moveY,
        onCompleteParams: [target, direction * -1],
      });
    }

    function random(min, max) {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    }
    // ////////////////
    const TL = new Timeline();
    const duration = 0.3;
    var delay = 0.5;
    // firts load redux store is empty or initial state
    if (season === "") {
      TL.to(".home-cont", { display: "block", delay: delay })
        .to(".menu-flex", { display: "flex" })
        .from("#hello", { left: -500, duration: duration })
        .from("#item0", { xPercent: 100, duration: 0.1 })
        .from("#item1", { xPercent: 100, duration: 0.1 })
        .from("#item2", { xPercent: 100, duration: 0.1 })
        .from("#item3", { xPercent: 100, duration: 0.1 })
        .from("#item4", { xPercent: 100, duration: 0.1 })
        .from("#item5", { xPercent: 100, duration: 0.1 })
        .from("#item6", { xPercent: 100, duration: 0.1 })
        .from("#item7", { xPercent: 100, duration: 0.1 })
        .from(".theme-menu-flex", { bottom: "-1000px", duration: duration })
        .from("#front", { opacity: 0, duration: duration })
        .from(".line", { left: "-1500px", duration: duration })
        .from(".my-name", { opacity: 0, duration: duration })
        .from(".steve-cont", { opacity: 0, duration: duration })
        .from(".my-img-cont", { opacity: 0, duration: duration });
    }
    // if theme is not default
    else {
      gsap.to(".moon", { display: "none" });
      gsap.to(".home-cont", { display: "block", delay: delay });
      gsap.to("#hello", { attr: { src: season.season_hello } });
    }
  });

  return (
    <div className="home-cont cont">
      <div className="entery"></div>
      <img id="hello" src={hello} className="hello" alt="hellow world" />

      <div className="front-developer">
        <div id="front">Front-End Developer </div>
        <div className="line"></div>
      </div>

      <h2 className="my-name">
        <span id="my-name">Rabee Aljaramani</span>
        <span className="extension">
          <img className="img_ext" id="img_ext" src={season_img_ext} alt="" />
        </span>
      </h2>
      <div className="my-img-cont">
        <img id="me" src={me} alt="rabee" />
      </div>
      <Moon />
      <Steve />
      <div
        className="animation-cont"
        onClick={() => {
          gsap.to(".animation-cont", { transform: "scale(0.1)", duration: 1 });
          setTimeout(() => {
            window
              .open(
                "https://github.com/rabeexxxx/rabee_portfolio_2021",
                "_blank"
              )
              .focus();
          }, 1000);
        }}
      >
        <img
          src={season.season_alien ? season.season_alien : alien}
          alt=""
          className="gif-img"
        />
      </div>
    </div>
  );
};

export default Home;
