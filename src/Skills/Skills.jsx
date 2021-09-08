import React from 'react';
import Skill from './Skill.jsx';
import { skillsList } from './skillsList.js';

const Skills = () => {
    return (
        <div className='skills-cont'>
            <h1 className='title'>SKILLS</h1>
            <div className="skills-grid">
                {skillsList.map(e=>{
                    return <Skill key={e.id} img={e.skill_img} name={e.skill_name} color={e.color} percent={e.percent}/>
                })}
            </div>
        </div>
    );
}

export default Skills;
