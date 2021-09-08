import React from 'react';
import Card from './Card.jsx';
import {projectsList} from './projects.js'
const Projects = () => {
    return (
        <div className='projects-cont'>
            <h1 className='title'>Recent Projects</h1>
                <div className='projects'>
                {projectsList.map(e=>{
                    return <Card key={e.id}
                            proj_name={e.proj_name}
                            proj_img={e.proj_img}
                            proj_tools={e.proj_tools}
                            proj_link={e.proj_link}/>
                })}
                </div>
        </div>
    );
}

export default Projects;
