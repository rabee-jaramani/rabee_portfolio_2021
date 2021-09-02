import React from 'react';

const Card = (props) => {
    return (
        <div className='project-card' onClick={()=>window.open(props.proj_link)}>
                        <div className='proj-name'>
                            {props.proj_name}
                        </div>
                        <img src={props.proj_img} alt={props.proj_name}/>
                        <div className='tools-used-flex'>
                            {props.proj_tools.map(e=>{
                                return <div>{e}</div>
                            })}
                        </div>
        </div>
    );
}

export default Card;
