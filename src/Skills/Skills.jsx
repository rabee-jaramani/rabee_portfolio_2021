import { Timeline } from "gsap/gsap-core";
import React, { useEffect } from "react";
import { skillsList } from "./skillsList.js";
import Skill from "./Skill";
// const Skill = lazy(() => import('./Skill'));
// const AvatarComponent = lazy(() => import('./AvatarComponent'));
const Skills = () => {
  useEffect(() => {
    const TL = new Timeline();
    TL.from("#grid-item1", { display: "none", duration: 0.2 })
      .from("#grid-item2", { display: "none", duration: 0.2 })
      .from("#grid-item3", { display: "none", duration: 0.2 })
      .from("#grid-item4", { display: "none", duration: 0.2 })
      .from("#grid-item5", { display: "none", duration: 0.2 })
      .from("#grid-item6", { display: "none", duration: 0.2 })
      .from("#grid-item7", { display: "none", duration: 0.2 })
      .from("#grid-item8", { display: "none", duration: 0.2 })
      .from("#grid-item9", { display: "none", duration: 0.2 })
      .from("#grid-item10", { display: "none", duration: 0.2 })
      .from("#grid-item11", { display: "none", duration: 0.2 })
      .from("#grid-item12", { display: "none", duration: 0.2 })
      .from("#grid-item13", { display: "none", duration: 0.2 })
      .from("#grid-item14", { display: "none", duration: 0.2 })
      .from("#grid-item15", { display: "none", duration: 0.2 })
      .from("#grid-item16", { display: "none", duration: 0.2 })
      .from("#grid-item17", { display: "none", duration: 0.2 });
  }, []);
  return (
    <div className="skills-cont">
      <h1 className="title">SKILLS</h1>
      <hr className="title-underline" />
      <div className="skills-grid">
        {skillsList.map((e) => {
          return (
            <Skill
              id={e.id}
              key={e.id}
              img={e.skill_img}
              name={e.skill_name}
              color={e.color}
              percent={e.percent}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
