import gsap from "gsap/all";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import Image from "./Image";
import { fillListImages } from "./images_data";
const MemoryTest = () => {
  const [difficulty, setDifficulty] = useState("easy");
  const [images_array, setImages_array] = useState([]);
  const [img1_name, setImg1_name] = useState(null);
  const [img1_id, setImg1_id] = useState(null);
  const [timer, setTimer] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [winCounter, setWinCounter] = useState(0);
  // /////////////////////////////////////////////
  const handleImageClick = (owner_img_id, owner_img_name) => {
    setClicks(clicks + 1);
    if (img1_name === null) {
      // first click
      setImg1_name(owner_img_name);
      setImg1_id(owner_img_id);
      // flip the image and disable clicks
      setTimeout(() => {
        gsap.to(`.img-item${owner_img_id}`, { transform: "rotateY(180deg)" });
        gsap.to(`.back-card${owner_img_id}`, { zIndex: -10, duration: 1.5 });
        // gsap.to(`.img-item${owner_img_id}`, { pointerEvents: "none" });
      }, 0);
    }

    // they are same image
    if (
      img1_name !== null &&
      img1_name === owner_img_name &&
      img1_id !== owner_img_id
    ) {
      setWinCounter(winCounter + 1);
      gsap.to(".images-grid", { pointerEvents: "none" });
      // flip second image and make the background green and disable clicks
      gsap.to(`.img-item${owner_img_id}`, { transform: "rotateY(180deg)" });
      gsap.to(`.back-card${owner_img_id}`, { zIndex: -10, duration: 1.5 });
      gsap.to(`.back-card${owner_img_id}`, { backgroundColor: "green" });
      gsap.to(`.img-item${owner_img_id}`, { pointerEvents: "none" });

      // make the img1 background green
      gsap.to(`.back-card${img1_id}`, { backgroundColor: "green" });
      gsap.to(`.img-item${img1_id}`, { pointerEvents: "none" });
      // Wonnnnnnnnnnnnnnn
      if (winCounter === 7) {
        alert("winnnnnnnnn");
      }
      // reset img1 parameters
      setImg1_name(null);
      setImg1_id(null);
      setTimeout(() => {
        gsap.to(".images-grid", { pointerEvents: "all" });
      }, 1500);
    }
    if (img1_name !== null && img1_name !== owner_img_name) {
      gsap.to(".images-grid", { pointerEvents: "none" });
      // second image not same first image then flip both back and reset img1 parameters
      // reset imag1 and image1_id
      // open second image to view it for user then close all
      gsap.to(`.img-item${owner_img_id}`, { transform: "rotateY(180deg)" });
      gsap.to(`.back-card${owner_img_id}`, { zIndex: -10, duration: 1.5 });

      // close all after 2 seconds and enable clicks
      setTimeout(() => {
        gsap.to(`.img-item${img1_id}`, { transform: "rotateY(0deg)" });
        gsap.to(`.back-card${img1_id}`, { zIndex: 0, duration: 0.2 });
        gsap.to(`.img-item${owner_img_id}`, { transform: "rotateY(0deg)" });
        gsap.to(`.back-card${owner_img_id}`, { zIndex: 0, duration: 0.2 });
        // gsap.to(`.img-item${img1_id}`, { pointerEvents: "all" });
        // gsap.to(`.img-item${owner_img_id}`, { pointerEvents: "all" });
        gsap.to(".images-grid", { pointerEvents: "all" });

        setImg1_name(null);
        setImg1_id(null);
      }, 1500);
    }
  };

  // /////////////////////////////////////////////////
  const handleStartGame = () => {
    var i = 0;
    $("html,body").animate(
      {
        scrollTop: $(".flex-timer-clicks-btn").offset().top,
      },
      "slow"
    );
    gsap.to(`.img-item`, { transform: "rotateY(180deg)" });
    gsap.to(`.back-card`, { zIndex: -10, duration: 1.5 });
    setTimeout(() => {
      gsap.to(`.img-item`, { transform: "rotateY(0deg)" });
      gsap.to(`.back-card`, { zIndex: 0, duration: 0.2 });
    }, 2000);
    setInterval(() => {
      i = i + 1;
      setTimer(i);
    }, 1000);
    $(".start-btn").prop("disabled", true);
    gsap.to(".images-grid", { pointerEvents: "all" });
  };
  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  // }
  useEffect(() => {
    var temp_array = [];
    if (difficulty === "easy") {
      //  make the array 4X4=16
      temp_array = fillListImages(16);
      setImages_array(temp_array);
      gsap.to(".images-grid", { gridTemplateColumns: "1fr 1fr 1fr 1fr " });
    } else {
      //  make the array 6X6=36
      temp_array = fillListImages(36);

      setImages_array(temp_array);
      gsap.to(".images-grid", {
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr ",
      });
    }
    // if easy and timer more than 20 seconds make timer yellow
    // if (difficulty === "easy" && timer > 20) {
    //   gsap.to("#timer", { backgroundColor: "rgb(248,225,83)" });
    // }
    // if (difficulty === "easy" && timer > 30) {
    //   gsap.to("#timer", { backgroundColor: "rgb(240,44,45)" });
    // }
    // if (difficulty === "easy" && clicks > 10) {
    //   gsap.to("#clicks", { backgroundColor: "rgb(248,225,83)" });
    // }
    // if (difficulty === "easy" && clicks > 20) {
    //   gsap.to("#clicks", { backgroundColor: "rgb(240,44,45)" });
    // }
  }, [difficulty, setImages_array]);
  return (
    <div className="memory-test-cont">
      <h1 className="title">Memory test</h1>
      <div className="difficulty-form">
        <label htmlFor="difficulty">Choose difficulty:</label>
        <select
          name="difficulty"
          id="difficulty"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="flex-timer-clicks-btn">
        <div className="fx-item" onClick={() => handleStartGame()}>
          <button id="start-btn" className="start-btn">
            Start
          </button>
        </div>
        <div className="fx-item" id="timer">
          <label htmlFor="timer">Timer: </label>
          <div id="timer" className="timer">
            {timer}
          </div>
        </div>

        <div className="fx-item" id="clicks">
          <label htmlFor="clicks">Clicks: </label>
          <div id="clicks" className="clicks">
            {clicks}
          </div>
        </div>
        {/* <div className="timer">{timer}</div>
        <button className="start-btn" onClick={() => handleStartGame()}>
          Start
        </button>
        <div className="clicks-cont">15</div> */}
      </div>
      <div className="images-grid">
        {images_array.map((e) => {
          return (
            <Image
              id={e.id}
              key={e.id}
              name={e.name}
              src={e.src}
              className={e.className}
              handleImageClick={handleImageClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MemoryTest;
