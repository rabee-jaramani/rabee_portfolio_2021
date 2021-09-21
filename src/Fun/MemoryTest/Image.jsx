import gsap from "gsap/all";
import React from "react";

const Image = (props) => {
  const handleClick = () => {
    gsap.to(`.img-item${props.id}`, { transform: "rotateY(180deg)" });
    gsap.to(`.back-card${props.id}`, { zIndex: -10, duration: 1.5 });
  };
  return (
    <div
      className={`img-item ${props.className}`}
      onClick={() => {
        handleClick();
      }}
    >
      <img className="memory-test-img" src={props.src} alt={props.name} />
      <div className={`back-card${props.id} back-card`}></div>
    </div>
  );
};

export default Image;
