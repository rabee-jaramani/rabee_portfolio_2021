import React, { useEffect }  from 'react';
import hello from '../images/hello.png'
import me from '../images/rabee2.png'

import { useSelector } from 'react-redux';
import { Timeline } from 'gsap/gsap-core';
import MouseAnimation from "../MouseAnimation/MouseAnimation";

const Home = () => {
    const TL=new Timeline()
    const season_img= useSelector(state=>state.Season.season_img)
    const duration=0.4
    
    useEffect(() => {
    TL.to('.home-cont',{display:'block'})
    .from('#front',{top:'-1000px',duration:duration,delay:1})
    .from('.line',{left: '-1500px',duration:duration})
    .from('.my-name',{top:'-1000px',duration:duration})
    .from('.my-img-cont',{top:'-1000px',duration:duration})
    .from('.about-me',{opacity:0,duration:duration})
    
    .from('#hello',{left: -500,duration:duration})
    .from('.menu-flex',{top:'-1000px',duration:duration})
    .from('.theme-menu-flex',{bottom:'-1000px',duration:duration})


    }, );

    return (
        <div className='home-cont cont'>
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
            {/* <div className='aboutMeAndImg_flex'> */}
                <div className='my-img-cont'>
                    <img src={me} alt='rabee'/>
                </div>
                <div className='about-me' id='about-me'>
                I come from an Informatics Engineering background and have 
                9+ years experience in the IT field, ranging from IT support
                to software development.
                Passionate about web development and seeking to grow in the
                role of a web developer by using my React, Redux, HTML and
                CSS skills to deliver coding excellence. 
                I studied to be a Computer Engineer because I have always 
                believed that technology is the future of humanity and it 
                will shape our lives in ways that we have only been able 
                to dream about.
                </div>
          <MouseAnimation/>

        </div>
    );
}

export default Home;
