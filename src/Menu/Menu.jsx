
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <div className='menu-flex'>
            <Link to='/' >
                <div className='menu-item item0' id='item0'>Home</div>
            </Link>
            <div className='menu-item item1' id='item1'>About</div>

            <Link to='/projects'>
                <div className='menu-item item2' id='item2'>Projects</div>
            </Link>
            
            <Link to='/skills'>
            <div className='menu-item item3' id='item3'>Skills</div>
            </Link>
            <Link to='/cv'>
                <div className='menu-item item4' id='item4'>My CV</div>
            </Link>
            <div className='menu-item item5' id='item5'>Contact</div>
            <div className='menu-item item6' id='item6'>Redux</div>
            <div className='menu-item item7' id='item7'>Api</div>


        </div>
    );
}

export default Menu;
