import React from 'react';
import Header from '../header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion';


const Hero = () => {
    const transition = {type: 'spring', duration:3};
    const mobile = window.innerWidth<=786 ? true: false;
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/* the best ad */}
                <div className="the-best-ad">
                    <motion.div
                    initial={{left: mobile? "100px": '250px'}}
                    whileInView={{left: "8px"}}
                    transition={{...transition, type: 'tween'}}>
                    </motion.div>
                    {/* <div></div> */}
                    <span>the best fitness in the town</span>
                </div>
                {/* hero heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body hh</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
            {/* figures */}
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert coachs</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>member joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
            </div>
            {/* hero buttons */}
            <div className="hero-buttons">
                <div className="btn">Get Started</div>
                <div className="btn">Learn More</div>
            </div>
        </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>
                <motion.div
                initial={{ right: "-3rem" }}
                whileInView={{ right: "4rem"}}
                transition={transition}
                className="heart-rate">
                {/* <div className="heart-rate"> */}
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                    </motion.div>
                {/* </div> */}
                {/* hero images */}
                <img src={hero_image} alt="" className='hero-image' />
                <motion.img
                initial={{right: "11rem"}}
                whileInView={{right: "20rem"}}
                transition={transition}
                src={hero_image_back} alt="" className='hero-image-back' />
                {/* calories */}
                <motion.div
                    initial={{right: '37rem'}}
                    whileInView={{right: '28rem'}}
                    transition={transition}
                    className="calories"
                    >

                {/* <div className="calories"> */}
                    <img src={Calories} alt="" />
                    <span>Calories  Burned</span>
                    <span>220 kcal</span>
                {/* </div> */}
                </motion.div>
            </div>
        </div>
    )
}

export default Hero