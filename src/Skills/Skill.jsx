import React from 'react';
import ProgressBar from 'react-percent-bar';
const Skill = (props) => {
    return (
        <div className="grid-item">
            <img src={props.img} alt="" className="skill-img" />
            <h2 className="skiil-name">{props.name}</h2>
            <ProgressBar width={100} height={10} colorShift={false} fillColor={props.color} percent={props.percent} />
        </div>
    );
}

export default Skill;
