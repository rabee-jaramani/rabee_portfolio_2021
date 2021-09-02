import React from 'react';
import CV from './Rabee Aljaramani CV.pdf'
const Cv = () => {
    return (
        <div className='cv-cont'>
            <embed className='embed' src={CV}  />
        </div>
    );
}

export default Cv;
