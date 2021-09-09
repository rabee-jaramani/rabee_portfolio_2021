import React, { useEffect, useState } from 'react';
import {facts} from './facts.js'
const Moon = () => {
    const [fact, setFact] = useState('');


    useEffect(() => {

    }, []);
    return (
        <div className="moon">
            <p className='hover'>Hover</p>
                <p className='fact-p'>{fact}</p>

            <ul>
                <li onMouseOver={()=>setFact(facts[0])} onMouseOut={()=>setFact('')}></li>
                <li onMouseOver={()=>setFact(facts[1])} onMouseOut={()=>setFact('')}></li>
                <li onMouseOver={()=>setFact(facts[2])} onMouseOut={()=>setFact('')}></li>
                <li onMouseOver={()=>setFact(facts[3])} onMouseOut={()=>setFact('')}></li>
                <li onMouseOver={()=>setFact(facts[4])} onMouseOut={()=>setFact('')}></li>
                <li onMouseOver={()=>setFact(facts[5])} onMouseOut={()=>setFact('')}></li>
                <li onMouseOver={()=>setFact(facts[6])} onMouseOut={()=>setFact('')}></li>
            </ul>
        </div>
    );
}

export default Moon;
