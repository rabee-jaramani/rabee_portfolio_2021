import React from "react";
import FunItem from "./FunItem";
import { fun_items } from "./fun_items";
const Fun = () => {
  return (
    <div className="fun-cont">
      <h1 className="title">FUN</h1>
      <hr className="title-underline" />

      <div className="fun-grid">
        {fun_items.map((e) => {
          return (
            <FunItem
              key={e.id}
              img={e.img}
              title={e.title}
              desc={e.desc}
              link={e.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Fun;
