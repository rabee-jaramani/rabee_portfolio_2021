import React, { useEffect }  from 'react';
import hello from '../images/hello.webp'
import me from '../images/rabee2.webp'
import $ from 'jquery'
import { useSelector } from 'react-redux';
import { Timeline } from 'gsap/gsap-core';
import Steve from './Steve/Steve';
import Moon from './Moon'
import gsap from 'gsap/all';
// import gsap, { Power1, TweenLite } from 'gsap/all';

// import hello_winter from '../images/hello.webp'
// import hello_summer from '../images/hello_summer.webp'
// import hello_spring from '../images/hello_spring.webp'
// import hello_autumn from '../images/hello_autumn.webp'


const Home = () => {
    const season_img_ext= useSelector(state=>state.Season.season_img_ext)
    const season=useSelector(state=>state.Season)

    useEffect(() => {

        const TL=new Timeline()
        const duration=0.3
        var delay=0.5
        // firts load redux store is empty or initial state
        if(season===''){
        TL
        .to('.home-cont',{display:'block',delay:delay})
        .from('#hello',{left: -500,duration:duration})
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
        
        }
        // if theme is not default
        else{
            gsap.to('#hello',{attr:{src:season.season_bg}})

        if(season.season_name==='winter')
        $('.moon').css("display",'none')
        gsap.to('.home-cont',{display:'block'})
        gsap.from('.theme-menu-flex',{bottom:'-1000px'})
        gsap.from('#front',{opacity:0,color:'white'})
        gsap.from('.line',{left: '-1500px',})
        gsap.from('.my-name',{opacity:0,color:'white'})
        gsap.to('#steve-cont',{backgroundColor:'rgb(2,41,78,0.5)'})
        gsap.from('.my-img-cont',{opacity:0})
       
        }

    }, [season]);

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
                    <img className='img_ext' id='img_ext' src={season_img_ext} alt=''/>
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
