import gsap from 'gsap/gsap-core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import star from '../images/ext/star.webp'
const MouseAnimation = () => {
   const {season_name,season_img_ext} = useSelector(state=>state.Season)
    useEffect(() => {
        let root=document.documentElement
        root.addEventListener('mousemove',e=>{
            gsap.to('.mouse-pointer',{
                scale:0.8,
                skewX:-10,
                x:e.clientX,
                y:e.clientY,
                stagger:0.1,
                display:'block'
            })
        })
    }, []);
    return (
        <div className='mover'>
            <img className='pointer1 mouse-pointer' src={season_img_ext?season_img_ext:star} alt={season_name}/>
            <img className='pointer2 mouse-pointer' src={season_img_ext?season_img_ext:star} alt={season_name}/>
            <img className='pointer3 mouse-pointer' src={season_img_ext?season_img_ext:star} alt={season_name}/>
            <img className='pointer4 mouse-pointer' src={season_img_ext?season_img_ext:star} alt={season_name}/>
            <img className='pointer5 mouse-pointer' src={season_img_ext?season_img_ext:star} alt={season_name}/>
            <img className='pointer6 mouse-pointer' src={season_img_ext?season_img_ext:star} alt={season_name}/>
            <img className='pointer7 mouse-pointer' src={season_img_ext?season_img_ext:star} alt={season_name}/>
            <img className='pointer8 mouse-pointer' src={season_img_ext?season_img_ext:star} alt={season_name}/>
            <img className='pointer9 mouse-pointer' src={season_img_ext?season_img_ext:star} alt={season_name}/>
            
        </div>
    );
}

export default MouseAnimation;
