// import gsap from "gsap/all";
import { Timeline } from "gsap/gsap-core";
import React, { useEffect } from "react";
import frontend from "./frontend.png";
const About = () => {
  const duration = 0.2;

  const mouseOver = (img, title, desc) => {
    const TL1 = new Timeline();
    if (
      img.includes("1") ||
      img.includes("3") ||
      img.includes("5") ||
      img.includes("7")
    ) {
      TL1.to(img, { left: -500, duration: 1 })
        .to(title, { opacity: 1, duration: duration })
        .to(desc, { opacity: 1, duration: duration });
    } else {
      TL1.to(img, { right: -500, duration: 1 })
        .to(title, { opacity: 1, duration: duration })
        .to(desc, { opacity: 1, duration: duration });
    }
  };
  const mouseOut = (img, title, desc) => {
    const TL2 = new Timeline();
    if (
      img.includes("1") ||
      img.includes("3") ||
      img.includes("5") ||
      img.includes("7")
    ) {
      TL2.to(title, { opacity: 0, duration: duration })
        .to(desc, { opacity: 0, duration: duration })
        .to(img, { left: 0 });
    } else {
      TL2.to(title, { opacity: 0, duration: duration })
        .to(desc, { opacity: 0, duration: duration })
        .to(img, { right: 0 });
    }
  };
  useEffect(() => {
    // gsap.to(".mover", { display: "none" });
  }, []);
  return (
    <div className="about-cont">
      <h1 className="title">ABOUT</h1>
      {/* <div className="brief">
        First-rate Informatics Engineer with Innovative tech mind and +9 years
        of experience in developing, programming and supporting. A FrontEnd
        developer with 2 years' experience in React-js, JavaScript, HTML CSS and
        more. A solid understanding of how systems and applications work.
        mbitious problem solver with a passion for Online businesses and would
        like to join a team of like-minded developers. Constantly striving to
        improve myself and enhance my skills in technologies.
      </div> */}
      <div className="about-grid">
        <div
          className="about-item about-item1"
          onMouseOver={() => mouseOver(".bg-img1", ".title1", ".desc1")}
          onMouseOut={() => mouseOut(".bg-img1", ".title1", ".desc1")}
        >
          <img alt="img" className="bg-img bg-img1" src={frontend} />
          <div className="title title1">15/02/2021 to present </div>
          <div className="desciption desc1">FrontEnd Developer</div>
        </div>

        <div
          className="about-item about-item2"
          onMouseOver={() => mouseOver(".bg-img2", ".title2", ".desc2")}
          onMouseOut={() => mouseOut(".bg-img2", ".title2", ".desc2")}
        >
          <img alt="img" className="bg-img bg-img2" src={frontend} />
          <div className="title title2">15/02/2021 to present </div>
          <div className="desciption desc2">FrontEnd Developer</div>
        </div>

        <div
          className="about-item about-item3"
          onMouseOver={() => mouseOver(".bg-img3", ".title3", ".desc3")}
          onMouseOut={() => mouseOut(".bg-img3", ".title3", ".desc3")}
        >
          <img alt="img" className="bg-img bg-img3" src={frontend} />
          <div className="title title3">15/02/2021 to present </div>
          <div className="desciption desc3">FrontEnd Developer</div>
        </div>

        <div
          className="about-item about-item4"
          onMouseOver={() => mouseOver(".bg-img4", ".title4", ".desc4")}
          onMouseOut={() => mouseOut(".bg-img4", ".title4", ".desc4")}
        >
          <img alt="img" className="bg-img bg-img4" src={frontend} />
          <div className="title title4">15/02/2021 to present </div>
          <div className="desciption desc4">FrontEnd Developer</div>
        </div>

        <div
          className="about-item about-item5"
          onMouseOver={() => mouseOver(".bg-img5", ".title5", ".desc5")}
          onMouseOut={() => mouseOut(".bg-img5", ".title5", ".desc5")}
        >
          <img alt="img" className="bg-img bg-img5" src={frontend} />
          <div className="title title5">15/02/2021 to present </div>
          <div className="desciption desc5">FrontEnd Developer</div>
        </div>

        <div
          className="about-item about-item6"
          onMouseOver={() => mouseOver(".bg-img6", ".title6", ".desc6")}
          onMouseOut={() => mouseOut(".bg-img6", ".title6", ".desc6")}
        >
          <img alt="img" className="bg-img bg-img6" src={frontend} />
          <div className="title title6">15/02/2021 to present </div>
          <div className="desciption desc6">FrontEnd Developer</div>
        </div>
      </div>
    </div>
  );
};

export default About;
