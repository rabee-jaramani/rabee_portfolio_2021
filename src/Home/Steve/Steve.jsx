import React from 'react';
import TypeIt from 'typeit-react';

const Steve = () => {
    return (
        <div className='steve-cont'>
            
            <TypeIt id='steve-cont'
            options={{
                speed: 30,
                startDelay: 3500,
                
              }}
            >“Design is not just what it looks like and feels like. Design is how it works.” --STEVE JOBS</TypeIt>
        </div>
    );
}

export default Steve;
