import gsap from 'gsap/gsap-core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
const MouseAnimation = () => {
   const {season_name,season_img} = useSelector(state=>state.Season)
    useEffect(() => {
        let root=document.documentElement
        var width=window.innerWidth
        root.addEventListener('mousemove',e=>{
            // console.log(e.clientY)
            if(width>1800){
            gsap.to('.mouse-pointer',{
                scale:0.8,
                skewX:-10,
                x:e.clientX,
                y:e.clientY-750,
                stagger:0.1,
                display:'block'
            })
        }
        if(width>1600 && width<1800){
            gsap.to('.mouse-pointer',{
                scale:0.8,
                skewX:-10,
                x:e.clientX,
                y:e.clientY-780,
                stagger:0.1,
                display:'block'
            })
        }
        if(width>1400 && width<1600){
            gsap.to('.mouse-pointer',{
                scale:0.8,
                skewX:-10,
                x:e.clientX,
                y:e.clientY-830,
                stagger:0.1,
                display:'block'
            })
        }
        if(width>1150 && width<1400){
            gsap.to('.mouse-pointer',{
                scale:0.8,
                skewX:-10,
                x:e.clientX,
                y:e.clientY-880,
                stagger:0.1,
                display:'block'
            })
        }
        if(width>800 && width<1150){
            gsap.to('.mouse-pointer',{
                scale:0.8,
                skewX:-10,
                x:e.clientX,
                y:e.clientY-500,
                stagger:0.1,
                display:'block'
            })
        }
        if(width<800){
            gsap.to('.mouse-pointer',{
                scale:0.8,
                skewX:-10,
                x:e.clientX,
                y:e.clientY-580,
                stagger:0.1,
                display:'block'
            })
        }
        })
    }, []);
    return (
        <div className='mover'>
            <img className='pointer1 mouse-pointer' src={season_img} alt={season_name}/>
            <img className='pointer2 mouse-pointer' src={season_img} alt={season_name}/>
            <img className='pointer3 mouse-pointer' src={season_img} alt={season_name}/>
            <img className='pointer4 mouse-pointer' src={season_img} alt={season_name}/>
            <img className='pointer5 mouse-pointer' src={season_img} alt={season_name}/>
            <img className='pointer6 mouse-pointer' src={season_img} alt={season_name}/>
            <img className='pointer7 mouse-pointer' src={season_img} alt={season_name}/>
            <img className='pointer8 mouse-pointer' src={season_img} alt={season_name}/>
            <img className='pointer9 mouse-pointer' src={season_img} alt={season_name}/>
            
        </div>
    );
}

export default MouseAnimation;
