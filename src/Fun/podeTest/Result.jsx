import gsap from "gsap/all";
import React from "react";

const Result = (props) => {
  const handleClose = () => {
    gsap.to(".questions-flex", { display: "block" });
    gsap.to(".pode-result-cont", { display: "none" });
  };
  return (
    <div className="pode-result-cont">
      <h2 onClick={() => handleClose()}>close</h2>
      <p className="result-p">{props.result}</p>
    </div>
  );
};

export default Result;
