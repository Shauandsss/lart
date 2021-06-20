import React from 'react';
import './images.scss'
import { useState } from 'react';

export default () => {

    let images = []

    images.push('https://wallpaperaccess.com/full/1221809.jpg',
    'https://wallpaperaccess.com/full/1197513.jpg', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg/1280px-Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg'
    );

    const [scrollX, setScrollX] = useState(0);
    
    const handleLeftArrow = () => {
        let x = scrollX + 1920;
        if(x > 0) {
            x = 0;
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth/2)
        let listW = images.length * (1920 * 2)
        if((window.innerWidth - listW) > x ){
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    }

    return (         
        <div className="Main">
            <div className="movieRow--list" style={{
                marginLeft :scrollX
            }}></div>
            {images.map((val)=>{
                return(<img src={val} alt="" /> )
            })}
            <div class="buttons">    
                <button class="next" onClick={handleRightArrow}></button>
                <button class="prev" onClick={handleLeftArrow}></button>
            </div>
        </div>
    )

}