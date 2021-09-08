
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <div className='menu-flex'>
            <Link to='/'>
                <div className='menu-item item0' id='item0'>Home</div>
            </Link>
            <Link to='/projects'>
                <div className='menu-item item1' id='item1'>Projects</div>
            </Link>
            
            <Link to='/skills'>
            <div className='menu-item item2' id='item2'>Skilss</div>
            </Link>
            <div className='menu-item item3' id='item3'>Contact</div>
            <div className='menu-item item4' id='item4'>Redux</div>
            <div className='menu-item item5' id='item5'>Api</div>
            <Link to='/cv'>
                <div className='menu-item item6' id='item6'>My CV</div>
            </Link>

        </div>
    );
}

export default Menu;
