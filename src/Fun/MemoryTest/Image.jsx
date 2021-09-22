import React from "react";

const Image = (props) => {
  const { id, name, src, className, handleImageClick } = props;
  // const handleClick = () => {
  //   if (img1_name === null) {
  //     console.log("Entered first if");
  //     //first click
  //     setImg1_name(name);
  //     setImg1_id(id);
  //     gsap.to(`.img-item${id}`, { transform: "rotateY(180deg)" });
  //     gsap.to(`.back-card${id}`, { zIndex: -10, duration: 1.5 });
  //   }
  //   if (img1_name !== null && img1_name === name) {
  //     console.log("Entered second if");

  //     // they are same image
  //     // flip second image and make the background green
  //     gsap.to(`.img-item${id}`, { transform: "rotateY(180deg)" });
  //     gsap.to(`.back-card${id}`, { zIndex: -10, duration: 1.5 });
  //     gsap.to(`.back-card${id}`, { backgroundColor: "green" });
  //     gsap.to(`.back-card${id}`, { backgroundColor: "green" });
  //     // make the img1 background green
  //     gsap.to(`.back-card${img1_id}`, { backgroundColor: "green" });
  //     // reset img1 parameters
  //     setImg1_name(null);
  //     setImg1_id(null);
  //   }
  //   if (img1_name !== null && img1_name !== name) {
  //     console.log("Entered else last");

  //     // second image not same first image then flip both back and reset img1 parameters
  //     gsap.to(`.img-item${id}`, { transform: "rotateY(0deg)" });
  //     gsap.to(`.back-card${id}`, { zIndex: 0, duration: 0.2 });
  //     gsap.to(`.img-item${img1_id}`, { transform: "rotateY(0deg)" });
  //     gsap.to(`.back-card${img1_id}`, { zIndex: 0, duration: 0.2 });
  //   }
  // };
  return (
    <div
      className={`img-item ${className}`}
      onClick={() => {
        handleImageClick(id, name);
      }}
    >
      <img className="memory-test-img" src={src} alt={name} />
      <div className={`back-card${id} back-card`}></div>
    </div>
  );
};

export default Image;
