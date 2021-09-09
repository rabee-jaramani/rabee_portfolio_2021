import React, { useEffect }  from 'react';
import hello from '../images/hello.webp'
import me from '../images/rabee2.webp'
// import $ from 'jquery'
import { useSelector } from 'react-redux';
import { Timeline } from 'gsap/gsap-core';
import Steve from './Steve/Steve';
import Moon from './Moon'
// import gsap, { Power1, TweenLite } from 'gsap/all';





const Home = () => {
    const season_img= useSelector(state=>state.Season.season_img)
    

    useEffect(() => {
        const TL=new Timeline()
        const duration=0.3
        var delay=0.5
        TL
        .to('.home-cont',{display:'block',delay:delay})
        .from('#hello',{left: -500,duration:duration})
        // .from('.menu-flex',{top:'-1000px',duration:duration})
        .from('#item0',{xPercent:100,duration:0.1})        
        .from('#item1',{xPercent:100,duration:0.1})        
        .from('#item2',{xPercent:100,duration:0.1})        
        .from('#item3',{xPercent:100,duration:0.1})        
        .from('#item4',{xPercent:100,duration:0.1})        
        .from('#item5',{xPercent:100,duration:0.1})        
        .from('#item6',{xPercent:100,duration:0.1})        
        .from('#item7',{xPercent:100,duration:0.1})        
        .from('.theme-menu-flex',{bottom:'-1000px',duration:duration})
        .from('#front',{opacity:0,duration:duration})
        .from('.line',{left: '-1500px',duration:duration})
        .from('.my-name',{opacity:0,duration:duration})
        .from('.steve-cont',{opacity:0,duration:duration})
        .from('.my-img-cont',{opacity:0,duration:duration})
        

    }, []);

    return (
        <div className='home-cont cont'>
            <div className='entery'>
               
            </div>
            <img id='hello' src={hello} className='hello' alt='hellow world'/>

            <div className='front-developer' >
                <div id='front'>Front-End Developer </div>
                <div className='line'></div>
            </div>                   

            <h2 className='my-name'>
                <span id='my-name'>Rabee Aljaramani</span>
                <span className='extension'>
                    <img className='img_ext' id='img_ext' src={season_img} alt=''/>
                </span>
            </h2>
                <div className='my-img-cont'>
                    <img id='me' src={me} alt='rabee'/>
                </div>
                <Moon/>
          <Steve/>
        </div>
    );
}

export default Home;
