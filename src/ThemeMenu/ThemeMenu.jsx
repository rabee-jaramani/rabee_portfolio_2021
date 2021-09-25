import React, { useEffect, useState } from "react";
// import $ from 'jquery'

import hello_winter from "../images/hello.webp";
import hello_summer from "../images/hello_summer.webp";
import hello_spring from "../images/hello_spring.webp";
import hello_autumn from "../images/hello_autumn.webp";

import { useDispatch } from "react-redux";
import { setSeasonAction } from "../REDUX";
import gsap from "gsap/gsap-core";
import $ from "jquery";
import summer from "../images/menu_icons/summer.webp";
import winter from "../images/menu_icons/winter.webp";
import spring from "../images/menu_icons/spring.webp";
import autumn from "../images/menu_icons/autumn.webp";
import bw from "../images/menu_icons/blackwhite.webp";
import themes from "../images/menu_icons/themes.webp";
import winter_bg from "../images/backgrounds/winter.webp";
import summer_bg from "../images/backgrounds/summer.webp";
import spring_bg from "../images/backgrounds/spring.webp";
import autumn_bg from "../images/backgrounds/autumn.webp";
import bw_bg from "../images/backgrounds/bw.webp";
import alien from "../images/alien/alien.webp";
import spring_alien from "../images/alien/spring_alien.webp";
import summer_alien from "../images/alien/summer_alien.webp";
import autumn_alien from "../images/alien/autumn_alien.webp";

import summer_ext from "../images/ext/summer_ext.webp";
import winter_ext from "../images/ext/winter_ext.webp";
import spring_ext from "../images/ext/spring_ext.webp";
import autumn_ext from "../images/ext/autumn_ext.webp";
import bw_ext from "../images/ext/star.webp";
import { Timeline } from "gsap/gsap-core";
import { useSelector } from "react-redux";

const ThemeMenu = () => {
  const dispatch = useDispatch();
  const TL = new Timeline();
  const [themeMenuStatus, setThemeMenuStatus] = useState(false);
  const season = useSelector((state) => state.season);

  const closeThemeMenu = () => {
    if (themeMenuStatus) {
      setThemeMenuStatus(false);
      gsap.to(".winter", {
        display: "none",
      });
      gsap.to(".spring", {
        display: "none",
        delay: 0.1,
      });
      gsap.to(".summer", {
        display: "none",
        delay: 0.2,
      });
      gsap.to(".autumn", {
        display: "none",
        delay: 0.3,
      });
      gsap.to(".blackwhite", {
        display: "none",
        delay: 0.4,
      });
    } else {
      setThemeMenuStatus(true);
      gsap.to(".winter", {
        display: "block",
      });
      gsap.to(".spring", {
        display: "block",
        delay: 0.1,
      });
      gsap.to(".summer", {
        display: "block",
        delay: 0.2,
      });
      gsap.to(".autumn", {
        display: "block",
        delay: 0.3,
      });
      gsap.to(".blackwhite", {
        display: "block",
        delay: 0.4,
      });
    }
  };

  const handleTheme = (
    season_name,
    season_img_ext,
    season_bg,
    season_hello,
    alien_img
  ) => {
    if (season_name !== "bw") {
      $(".moon").css("display", "none");
    }
    console.log(season_name, season_img_ext, season_bg, season_hello);
    dispatch(
      setSeasonAction({
        season_name: season_name,
        season_img_ext: season_img_ext,
        season_bg: season_bg,
        season_hello: season_hello,
        season_alien: alien_img,
      })
    );

    gsap.to("#body", { backgroundImage: `url(${season_bg})` });
    gsap.to("#hello", { attr: { src: season_hello } });

    if (season_name === "winter") {
      TL.to("#front", { color: "white" })
        .to("#my-name", { color: "white" })
        .to("#steve-cont", { backgroundColor: "rgb(2,41,78,0.5)" })
        .to("#item0", { backgroundColor: "rgb(110,170,220)" })
        .to("#item1", { backgroundColor: "rgb(100,160,210)" })
        .to("#item2", { backgroundColor: "rgb(80,140,190)" })
        .to("#item3", { backgroundColor: "rgb(60,120,170)" })
        .to("#item4", { backgroundColor: "rgb(40,100,160)" })
        .to("#item5", { backgroundColor: "rgb(10,70,128)" })
        .to("#item6", { backgroundColor: "rgb(3,59,118)" })
        .to("#item7", { backgroundColor: "rgb(3,39,108)" });
      gsap.to(".brief", { backgroundColor: "rgb(49,84,122,0.5)" });
      gsap.to(".inside", { backgroundColor: "rgb(49,84,122,0.5)" });
    }
    if (season_name === "spring") {
      TL.to("#front", { color: "rgb(199,12,71)" })
        .to("#my-name", { color: "rgb(210,30,90)" })
        .to("#steve-cont", { backgroundColor: "rgb(205,7,67,0.5)" })
        .to("#item0", { backgroundColor: "rgb(205,7,67)" })
        .to("#item1", { backgroundColor: "rgb(199,12,71)" })
        .to("#item2", { backgroundColor: "rgb(175,17,75)" })
        .to("#item3", { backgroundColor: "rgb(160,23,80)" })
        .to("#item4", { backgroundColor: "rgb(145,28,85)" })
        .to("#item5", { backgroundColor: "rgb(130,33,90)" })
        .to("#item6", { backgroundColor: "rgb(115,38,95)" })
        .to("#item7", { backgroundColor: "rgb(100,42,100)" });
      gsap.to(".brief", { backgroundColor: "rgb(199,12,71,0.5)" });
      gsap.to(".inside", { backgroundColor: "rgb(199,12,71,0.5)" });
    }
    if (season_name === "summer") {
      TL.to("#front", { color: "rgb(254,169,124)" })
        .to("#my-name", { color: "rgb(254,169,124)" })
        .to("#steve-cont", { backgroundColor: "rgb(237,108,76,0.5)" })
        .to("#item0", { backgroundColor: "rgb(60,185,165)" })
        .to("#item1", { backgroundColor: "rgb(3,108,133)" })
        .to("#item2", { backgroundColor: "rgb(60,185,165)" })
        .to("#item3", { backgroundColor: "rgb(40,140,170)" })
        .to("#item4", { backgroundColor: "rgb(42,175,155)" })
        .to("#item5", { backgroundColor: "rgb(23,120,150)" })
        .to("#item6", { backgroundColor: "rgb(70,195,175)" })
        .to("#item7", { backgroundColor: "rgb(23,120,150)" });
      gsap.to(".brief", { backgroundColor: "rgb(60,185,165,0.5)" });
      gsap.to(".inside", { backgroundColor: "rgb(60,185,165,0.5)" });
    }
    if (season_name === "autumn") {
      TL.to("#front", { color: "rgb(252,150,59)" })
        .to("#my-name", { color: "rgb(220,190,90)" })
        .to("#steve-cont", { backgroundColor: "rgb(252,150,59,0.5)" })
        .to("#item0", { backgroundColor: "rgb(140,50,40)" })
        .to("#item1", { backgroundColor: "rgb(146,59,51)" })
        .to("#item2", { backgroundColor: "rgb(150,70,60)" })
        .to("#item3", { backgroundColor: "rgb(160,80,70)" })
        .to("#item4", { backgroundColor: "rgb(170,90,80)" })
        .to("#item5", { backgroundColor: "rgb(180,100,90)" })
        .to("#item6", { backgroundColor: "rgb(190,110,100)" })
        .to("#item7", { backgroundColor: "rgb(200,120,110)" });
      gsap.to(".brief", { backgroundColor: "rgb(167,83,45,0.5)" });
      gsap.to(".inside", { backgroundColor: "rgb(167,83,45,0.5)" });
    }
    if (season_name === "bw") {
      dispatch(
        setSeasonAction({
          season_name: "bw",
          season_img_ext: season_img_ext,
          season_bg: season_bg,
        })
      );
      TL.to("#front", { color: "rgb(251,251,251)" })
        .to("#my-name", { color: "rgb(251,251,251)" })
        .to("#steve-cont", { backgroundColor: "transparent" })
        // .to('#body',{backgroundImage:`none`})
        .to("#body", { backgroundColor: `rgb(1,1,1)` })
        .to("#hello", { attr: { src: hello_winter } })
        .to("#item0", { backgroundColor: "rgb(40, 40, 40)" })
        .to("#item1", { backgroundColor: "rgb(50, 50, 50)" })
        .to("#item1", { backgroundColor: "rgb(71, 71, 71)" })
        .to("#item2", { backgroundColor: "rgb(90, 90, 90)" })
        .to("#item3", { backgroundColor: "rgb(120, 120, 120)" })
        .to("#item4", { backgroundColor: "rgb(140, 140, 140)" })
        .to("#item5", { backgroundColor: "rgb(160, 160, 160)" })
        .to("#item6", { backgroundColor: "rgb(180, 180, 180)" })
        .to("#item7", { backgroundColor: "rgb(200, 200, 200)" });
      gsap.to(".brief", { backgroundColor: "rgba(0, 0, 0, 0.603)" });
      gsap.to(".inside", { backgroundColor: "rgba(0, 0, 0, 0.603)" });
    }
  };

  useEffect(() => {
    document.querySelector(".winter").addEventListener(
      "click",
      function (event) {
        event.preventDefault();
      },
      false
    );
  }, [season]);

  return (
    <div className="theme-menu-flex">
      <div
        className="themes flex-item"
        onClick={() => {
          closeThemeMenu();
        }}
      >
        <img src={themes} alt="themes" />
        <div className="theme-title">Themes</div>
      </div>

      <div
        className="winter flex-item"
        onClick={() =>
          handleTheme("winter", winter_ext, winter_bg, hello_winter, alien)
        }
      >
        <img src={winter} alt="winter" />
        <div className="theme-title">Winter</div>
      </div>

      <div
        className="spring flex-item"
        onClick={() =>
          handleTheme(
            "spring",
            spring_ext,
            spring_bg,
            hello_spring,
            spring_alien
          )
        }
      >
        <img src={spring} alt="spring" />
        <div className="theme-title">Spring</div>
      </div>

      <div
        className="summer flex-item"
        onClick={() =>
          handleTheme(
            "summer",
            summer_ext,
            summer_bg,
            hello_summer,
            summer_alien
          )
        }
      >
        <img src={summer} alt="summer" />
        <div className="theme-title">Summer</div>
      </div>

      <div
        className="autumn flex-item"
        onClick={() =>
          handleTheme(
            "autumn",
            autumn_ext,
            autumn_bg,
            hello_autumn,
            autumn_alien
          )
        }
      >
        <img src={autumn} alt="land" />
        <div className="theme-title">Autumn</div>
      </div>

      <div
        className="blackwhite flex-item"
        onClick={() => handleTheme("bw", bw_ext, bw_bg, null, alien)}
      >
        <img src={bw} alt="bw" />
        <div className="theme-title">BW</div>
      </div>
    </div>
  );
};

export default ThemeMenu;
