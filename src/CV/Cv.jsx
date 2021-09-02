import React from 'react';
import CV from './Rabee Aljaramani CV.pdf'
const Cv = () => {
    return (
        <div className='cv-cont'>
            <object data={CV} type="application/pdf">
                <p>Your web browser doesn't have a PDF plugin.
                Instead you can <a href={CV}>click here to
                download the PDF file.</a></p>
                </object>
        </div>
    );
}

export default Cv;
