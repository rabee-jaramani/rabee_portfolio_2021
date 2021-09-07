import React, { useState } from 'react';
// import $ from 'jquery'

import hello_winter from '../images/hello.png'
import hello_summer from '../images/hello_summer.png'
import hello_spring from '../images/hello_spring.png'
import hello_autumn from '../images/hello_autumn.png'


import { useDispatch } from 'react-redux';
import { setSeasonExtAction } from '../REDUX';
import gsap from 'gsap/gsap-core';

import summer from '../images/menu_icons/summer.png'
import winter from '../images/menu_icons/winter.png'
import spring from '../images/menu_icons/spring.png'
import autumn from '../images/menu_icons/autumn.png'
import bw from '../images/menu_icons/blackwhite.png'
import themes from '../images/menu_icons/themes.png'
import winter_bg from '../images/backgrounds/winter.webp'
import summer_bg from '../images/backgrounds/summer.webp'
import spring_bg from '../images/backgrounds/spring.webp'
import autumn_bg from '../images/backgrounds/autumn.webp'
import bw_bg from '../images/backgrounds/bw.png'

import summer_ext from '../images/ext/summer_ext.png'
import winter_ext from '../images/ext/winter_ext.png'
import spring_ext from '../images/ext/spring_ext.png'
import autumn_ext from '../images/ext/autumn_ext.png'
import bw_ext from '../images/ext/star.png'
import { Timeline } from 'gsap/gsap-core';


// const changeTheme=(season)=>{
//     var t1=gsap.timeline()
// t1.to('#body',{
//     backgroundImage:`url(${snow})`,
//     backgroundSize:'cover',
//     backgroundAttachment:'fixed',
// })
// .from('.theme-menu-flex',{
//    marginLeft:-1000 
// })
// }

const ThemeMenu = () => {

    const dispatch = useDispatch()
    const TL=new Timeline()
    const [themeMenuStatus, setThemeMenuStatus] = useState(true);
    const closeThemeMenu=()=>{
        if(themeMenuStatus){
            setThemeMenuStatus(false)
            gsap.to('.winter',{
                display:'none',
            })
            gsap.to('.spring',{
                display:'none',
                delay:0.1
            })
            gsap.to('.summer',{
                display:'none',
                delay:0.2
            })
            gsap.to('.autumn',{
                display:'none',
                delay:0.3
            })
            gsap.to('.blackwhite',{
                display:'none',
                delay:0.4
            })
        }
        else{
            setThemeMenuStatus(true)
            gsap.to('.winter',{
                display:'block',
            })
            gsap.to('.spring',{
                display:'block',
                delay:0.1
            })
            gsap.to('.summer',{
                display:'block',
                delay:0.2
            })
            gsap.to('.autumn',{
                display:'block',
                delay:0.3
            })
            gsap.to('.blackwhite',{
                display:'block',
                delay:0.4
            })
        }
    }

    
    const handleTheme=(season_name,season_img,bg_img,hello_img)=>{
        dispatch(setSeasonExtAction({season_name:season_name,season_img:season_img}))
        gsap.to('#body',{backgroundImage:`url(${bg_img})`})
        gsap.to('#hello',{attr:{src:hello_img}})
        if(season_name==='winter'){
            TL.to('#front',{color:'white'})
            .to('#my-name',{color:'white'})
            .to('#about-me',{color:'white',textShadow:'2px 2px rgb(2,57,114)'})
            .to('#item0',{backgroundColor:'rgb(110,170,220)'})     
            .to('#item1',{backgroundColor:'rgb(100,160,210)'})     
            .to('#item2',{backgroundColor:'rgb(80,140,190)'})        
            .to('#item3',{backgroundColor:'rgb(60,120,170)'})        
            .to('#item4',{backgroundColor:'rgb(40,100,160)'})        
            .to('#item5',{backgroundColor:'rgb(10,70,128)'})        
            .to('#item6',{backgroundColor:'rgb(3,59,118)'})        
        }
        if(season_name==='spring'){
            TL.to('#front',{color:'rgb(199,12,71)'})
            .to('#my-name',{color:'rgb(210,30,90)'})
            .to('#about-me',{color:'rgb(255,255,255)', textShadow:'none'})
            .to('#item0',{backgroundColor:'rgb(205,7,67)'})        
            .to('#item1',{backgroundColor:'rgb(199,12,71)'})        
            .to('#item2',{backgroundColor:'rgb(175,17,75)'})        
            .to('#item3',{backgroundColor:'rgb(160,23,80)'})        
            .to('#item4',{backgroundColor:'rgb(145,28,85)'})        
            .to('#item5',{backgroundColor:'rgb(130,33,90)'})        
            .to('#item6',{backgroundColor:'rgb(115,38,95)'})        
        }
        if(season_name==='summer'){
            TL.to('#front',{color:'rgb(254,169,124)'})
            .to('#my-name',{color:'rgb(254,169,124)'})
            .to('#about-me',{color:'white', textShadow:'1px 1px black',backgroundColor:'transparent  '})
            .to('#item0',{backgroundColor:'rgb(60,185,165)'})        
            .to('#item1',{backgroundColor:'rgb(3,108,133)'})        
            .to('#item2',{backgroundColor:'rgb(60,185,165)'})        
            .to('#item3',{backgroundColor:'rgb(40,140,170)'})        
            .to('#item4',{backgroundColor:'rgb(42,175,155)'})        
            .to('#item5',{backgroundColor:'rgb(23,120,150)'})       
            .to('#item6',{backgroundColor:'rgb(70,195,175)'})        
        }
        if(season_name==='autumn'){
            TL.to('#front',{color:'rgb(252,150,59)'})
            .to('#my-name',{color:'rgb(220,190,90)'})
            .to('#about-me',{color:'rgb(220,190,90)', textShadow:'1px 1px black',backgroundColor:'transparent  '})
            .to('#item0',{backgroundColor:'rgb(140,50,40)'})        
            .to('#item1',{backgroundColor:'rgb(146,59,51)'})        
            .to('#item2',{backgroundColor:'rgb(150,70,60)'})        
            .to('#item3',{backgroundColor:'rgb(160,80,70)'})        
            .to('#item4',{backgroundColor:'rgb(170,90,80)'})        
            .to('#item5',{backgroundColor:'rgb(180,100,90)'})       
            .to('#item6',{backgroundColor:'rgb(190,110,100)'})        
        }
        if(season_name==='bw'){
            dispatch(setSeasonExtAction({season_name:'bw',season_img:season_img}))
            TL.to('#front',{color:'rgb(251,251,251)'})
                .to('#my-name',{color:'rgb(251,251,251)'})
                .to('#about-me',{color:'rgb(251,251,251)'})
                // .to('#body',{backgroundImage:`none`})
                .to('#body',{backgroundColor:`rgb(1,1,1)`})
                .to('#hello',{attr:{src:hello_winter}})
                .to('#item1',{backgroundColor:'rgb(50, 50, 50)'})        
                .to('#item1',{backgroundColor:'rgb(71, 71, 71)'})        
                .to('#item2',{backgroundColor:'rgb(90, 90, 90)'})        
                .to('#item3',{backgroundColor:'rgb(120, 120, 120)'})        
                .to('#item4',{backgroundColor:'rgb(140, 140, 140)'})        
                .to('#item5',{backgroundColor:'rgb(160, 160, 160)'})       
                .to('#item6',{backgroundColor:'rgb(180, 180, 180)'})    
        }
        }
       


   
    return (
        <div className='theme-menu-flex'>
            
                <div className='themes flex-item' onClick={()=>{closeThemeMenu()}}>
                    <img src={themes} alt='themes'/>
                    <div className='title'>Themes</div>
                </div> 


                <div className='winter flex-item' 
                onClick={()=>handleTheme('winter',winter_ext,winter_bg,hello_winter)}>
                    <img src={winter} alt='winter'/>
                    <div className='title'>Winter</div>
                </div>

                <div className='spring flex-item' 
                onClick={()=>handleTheme('spring',spring_ext,spring_bg,hello_spring)}>
                    <img src={spring} alt='spring'/>
                    <div className='title'>Spring</div>
                </div>

                <div className='summer flex-item' 
                onClick={()=>handleTheme('summer',summer_ext,summer_bg,hello_summer)}>
                    <img src={summer} alt='summer'/>
                    <div className='title'>Summer</div>
                </div>

                <div className='autumn flex-item' 
                onClick={()=>handleTheme('autumn',autumn_ext,autumn_bg,hello_autumn)}>
                    <img src={autumn} alt='land'/>
                    <div className='title'>Autumn</div>
                </div>

                <div className='blackwhite flex-item' onClick={()=>handleTheme('bw',bw_ext,bw_bg,null)}>
                    <img src={bw} alt='bw'/>
                    <div className='title'>BW</div>
                </div>
            </div>
    );
}

export default ThemeMenu;
