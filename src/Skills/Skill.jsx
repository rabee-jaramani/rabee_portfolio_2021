
import React, {  useEffect } from 'react';
import ProgressBar from 'react-percent-bar';
const Skill = (props) => {
useEffect(() => {

}, []);
    return (

        <div className="grid-item" id={`grid-item${props.id}`} >
            <img src={props.img} alt="" className="skill-img" />
            <h2 className="skiil-name">{props.name}</h2>
            <ProgressBar width={100} height={10} colorShift={false} fillColor={props.color} percent={props.percent} />
        </div>

    );
}

export default Skill;
