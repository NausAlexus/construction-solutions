'use client';
import React, { useState } from 'react';
import style from './Banner.module.css';
import Slider from '../Slider/Slider';
import Details from '../Details/Details';

const Banner = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return ( 
        <div className={style.banner}>
            <div className={style.banner__content}>
                <Slider handelclick={props.handelclick} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
                <Details handelclick={props.handelclick}/>
            </div>
            <div className={style.dots}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <div 
                        key={index} 
                        className={`${style.dot} ${currentSlide === index ? style.activeDot : ''}`} 
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
            <div className={style.info}></div>
        </div>
    );
};

export default Banner;