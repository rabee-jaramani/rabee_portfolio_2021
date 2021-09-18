import gsap from "gsap/all";
import React, { useEffect, useState } from "react";
import handle from "./images/handle.png";
const Griditem = (props) => {
  const {
    itemClass,
    doorClass,
    dateClass,
    roleClass,
    date,
    role,
    country,
    map,
    about,
  } = props;
  const [opened, setOpened] = useState(false);
  const openDoor = () => {
    if (!opened) {
      gsap.to("." + doorClass, { right: "-91%", duration: 1 });
      setOpened(true);
    } else {
      gsap.to("." + doorClass, { right: 0 });
      setOpened(false);
    }
  };
  useEffect(() => {}, []);

  return (
    <div className={`about-item ${itemClass}`}>
      <div className={`bg-door ${doorClass}`}>
        <img
          className="handle"
          alt="handle"
          src={handle}
          onClick={() => openDoor()}
        />
        <div className={`role ${roleClass}`}>{role}</div>
        <div className={`date ${dateClass}`}>{date} </div>
        <div className="country">{country}</div>
        <img className="map" alt="country" src={map} />
      </div>
      <div className="inside">{about}</div>
    </div>
  );
};

export default Griditem;
